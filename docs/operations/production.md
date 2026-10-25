# Rhodo: сървър, deploy и връщане на версия

Този документ е за човек, който поддържа сайта. Версионираните настройки са в [`scripts/production`](../../scripts/production/), а тестовете на deploy транзакцията — в [`tests/deployment/test_rhodo_deploy.py`](../../tests/deployment/test_rhodo_deploy.py).

## Сървър и режими

Новият VPS е `169.58.175.172`, hostname `vmi3690666`. BTR production и stage също работят на него и не бива да се прекъсват при работа по Rhodo. Старият Rhodo е на `173.212.247.104` и се запазва през DNS прехода за връщане.

На **25.10.2026** публичните `rhodo-rock.com` и `www.rhodo-rock.com` са прехвърлени към новия VPS. Активният режим е `production`. Проверени са двата HTTPS адреса, HTTP пренасочването, Blogger новини/статия, iRun формата и мобилната навигация. Пощата е отделена към Jump.bg според [DNS ръководството](dns-and-mail.md), а пробното автоматично подновяване е успешно според [HTTPS ръководството](https.md). Не е рестартиран VPS и BTR конфигурациите са запазени.

Rhodo Node слуша само на `127.0.0.1:3002`. Частният Nginx HTTPS listener на `127.0.0.1:8443` остава достъпен само локално за проверки. Публичният Rhodo използва отделни HTTP/HTTPS virtual hosts на портове 80/443, без промени по BTR файловете.

Режимът е записан в root-only `/etc/rhodo-production/config.json`: `private-preview` обслужва репетицията; `production` се разрешава само с отделен root marker `public-ready`, създаден при одобреното публично активиране. Текущият режим, commit и release се виждат с `deploy-rhodo-production.sh --check`. DNS може още да се разпространява независимо от готовия публичен listener.

## Как се влиза и къде е проектът

От Terminal на Mac:

```bash
ssh -i ~/.ssh/contabo-vmi3690666-codex ubuntu@169.58.175.172
```

Входът е с личния SSH ключ, не с root парола. Другите устройства трябва да имат собствен предварително разрешен ключ. Никога не копирай частен ключ в Git или в чат. Администраторските действия се изпълняват чрез `sudo`.

Активната версия е в `/srv/rhodo-rock/current`. Тази директория е умишлено защитена от обикновения `ubuntu` и от другите сайтове. За разглеждане като потребителя на Rhodo:

```bash
sudo -u rhodo-site /bin/bash
cd /srv/rhodo-rock/current
pwd
exit
```

`sudo -u rhodo-site /bin/bash` създава административно разрешена локална сесия; `rhodo-site` няма собствен SSH вход, парола или sudo права. Файловете на активната версия са собственост на root и се четат от приложението. Не ги редактирай направо и не променяй правата, за да ги отвориш през SFTP. Редактирай локалното Git репо и публикувай с deploy командата.

## Публикуване с една команда

След проверени промени и push в `main` на `github.com/rhodorace/rhodorace`, изпълни на новия VPS:

```bash
sudo /usr/local/libexec/rhodo-production/deploy-rhodo-production.sh
```

В режим `production` това обновява активния публичен сайт. В `private-preview` обновява само репетицията. Git push сам по себе си не активира версия на Contabo; режимът не се сменя от deploy командата.

Командата последователно:

1. Заключва deploy процеса, за да няма две едновременни операции, и архивира частно конфигурацията и текущото състояние.
2. Определя точния commit от `main` и изтегля ново отделно копие. Не използва и не променя старите диагностични копия.
3. Изпълнява `npm ci --ignore-scripts` по фиксирания lock файл, без lifecycle hooks, с включени build инструменти.
4. Изпълнява ESLint без предупреждения и `build:prod`. Изтеглянето, npm и build работят като `rhodo-site`, с ограничения на паметта/CPU и без достъп до BTR. Build фазата няма външна мрежа.
5. Защитава release файловете от запис, подготвя отделен runtime cache и атомарно сменя `current`.
6. Рестартира само `rhodo-rock.service`, проверява Node и HTTPS, двата hostname-а, BG/EN, новини, статия и забранени служебни пътища.
7. В production проверява и публичния HTTPS listener за двата hostname-а, HTTP → HTTPS и ACME marker-а; отказва публичен `noindex`.
8. При грешка след превключването възстановява предишната версия и проверява нея. При неуспешен първи deploy спира само Rhodo, защото няма предишна версия.

Това не е обещание за zero downtime: при активиране има кратък рестарт само на Rhodo Node. Сайтът няма собствена SQL база; тази процедура не прави миграции или промени по BTR. Публичният listener има собствени security headers и няма частния `noindex` или ограниченията, блокиращи analytics. Нормалното спиране на Next с exit 143 се приема за успешно от systemd.

За изрично избран, вече проверен commit:

```bash
sudo /usr/local/libexec/rhodo-production/deploy-rhodo-production.sh --commit FULL_40_CHARACTER_COMMIT_SHA
```

Не копирай примерния placeholder буквално. Не комбинирай опциите.

## Проверка и връщане

Само проверка на активната версия, без build, рестарт или смяна на версия:

```bash
sudo /usr/local/libexec/rhodo-production/deploy-rhodo-production.sh --check
```

Връщане към предишния успешно активиран release:

```bash
sudo /usr/local/libexec/rhodo-production/deploy-rhodo-production.sh --rollback previous
```

Rollback сменя `current`, рестартира **само Rhodo** и отново проверява сайта. Не преизтегля зависимости. При неуспех се връща към версията, от която е започнал. След успешно връщане `previous` сочи към версията, която току-що е била заменена, така че командата може да върне и нея.

За конкретен release използвай същата опция с реален release ID от администраторските записи в `/var/lib/rhodo-production-deploy/releases/`. Ако няма записана предишна версия, операцията отказва без промяна на услугата. Не заменяй ръчно symlink-а и state файла поотделно.

## Кое къде се пази

| Път | Предназначение |
| --- | --- |
| `/srv/rhodo-rock/current` | Атомарна връзка към активната защитена версия. |
| `/srv/rhodo-rock/releases/<release-id>` | Завършени версии с code, node_modules, public и `.next`. Запазват се за rollback. |
| `/srv/rhodo-rock/builds/<release-id>` | Изолирана подготовка; неуспешен build остава тук за диагностика. |
| `/srv/rhodo-rock/shared/build-cache` | npm cache, достъпен само при build. |
| `/srv/rhodo-rock/shared/runtime-cache/<release-id>` | Единствената записваема приложна област за съответната версия. |
| `/srv/rhodo-rock/source` | По-старо подготвително Git копие; не е текущата версия и не е deploy цел. |
| `/etc/rhodo-production/build.env` | Защитена build настройка за съществуващия Blogger API ключ; не е в Git. |
| `/etc/rhodo-production/config.json` | Администраторско разрешение за активния режим; след миграцията е `production`. |
| `/etc/rhodo-production/acme/` | Отделна Certbot конфигурация, сертификат, частен ключ и renewal hook само за Rhodo. |
| `/etc/rhodo-production/tls/` | Предишни TLS файлове, запазени частно за връщане. |
| `/etc/systemd/system/rhodo-certbot.{service,timer}` | Автоматично подновяване; timer е включен след успешната HTTP проверка и dry-run при миграцията. |
| `/usr/local/libexec/rhodo-production/` | Root-owned deploy контролер и build helper. Приложението не може да ги подменя. |
| `/etc/systemd/system/rhodo-rock.service` | Ограничена Node услуга с автоматичен старт след boot. |
| `/etc/nginx/sites-available/rhodo-private-preview.conf` | Трите localhost HTTPS server блока: два hostname-а и отказ за неизвестен SNI. |
| `/etc/nginx/snippets/rhodo-private-common.conf` | Proxy, static assets, cache headers и preview ограничения. |
| `/etc/nginx/sites-available/rhodo-production.conf` | Публичните Rhodo HTTP/HTTPS virtual hosts. |
| `/etc/nginx/snippets/rhodo-public-{common,headers}.conf` | Публични proxy/static настройки и security headers. |
| `/var/lib/rhodo-production-deploy/current.json` | Активен commit, build ID и предишна версия; само за администратор. |
| `/var/lib/rhodo-production-deploy/logs/` | Отделни логове за fetch/install/build и lint. |
| `/var/lib/rhodo-production-deploy/backups/` | Компресирани частни архиви на конфигурацията и state преди deploy/rollback. Съдържат чувствителни настройки. |
| `/root/rhodo-production-bootstrap-20261025T125747Z/` | Архив и проверки от първоначалната подготовка, включително предишните Nginx настройки/ACL. |

Архивът на конфигурацията не дублира целия release; защитените releases се запазват отделно. Няма автоматично изтриване на стари версии или offsite backup за Rhodo в този етап. Наблюдавай свободното място и одобри отделно почистване/външен архив. Не възстановявай snapshot на целия VPS за Rhodo rollback: това би върнало назад и реалните BTR данни.

## Диагностика

```bash
sudo systemctl status rhodo-rock.service --no-pager
sudo journalctl -u rhodo-rock.service -n 80 --no-pager
sudo tail -n 80 /var/log/nginx/rhodo-private-error.log
sudo /usr/local/libexec/rhodo-production/deploy-rhodo-production.sh --check
```

При build грешка използвай release ID, изписан от командата, и съответния `*-fetch.log`, `*-install.log` или `*-build.log` в частната logs директория. Не публикувай необработени логове или env файлове. Архивите са само за root. Работещите root helpers не се обновяват автоматично от приложното Git repo; промяна в тях изисква отделна администраторска проверка и инсталация от проверен commit.

## HTTPS, кеширане и интеграции

Новият обединен сертификат е валиден до **23.01.2027** и вече се използва от частния HTTPS listener. Издаден е с временни DNS TXT записи, които са премахнати след проверката; всички 40 първоначални DNS записа са запазени. Rhodo използва отделна Certbot конфигурация и не участва в BTR timer-а.

Подновяването използва отделни unit-и, deploy hook и защитена команда за активиране след DNS прехвърлянето. Преди cutover timer-ът е изключен; след успешни DNS/HTTP и ACME staging/dry-run проверки командата го включва. Текущият статус се вижда с `certificate-renewal.py --check`. Виж [подробното HTTPS ръководство](https.md).

Версионираните Next assets имат едногодишен immutable cache. Публичните изображения/GPX файлове се четат директно от Nginx с по-кратък cache, HTML минава през Node. Nginx има четене само на публичните файлове, без достъп до source, `.env`, ключове или право за запис. Node има лимит 1 GiB памет и работи без root/capabilities; Next кодът и зависимостите са само за четене.

Частният preview има `noindex`, блокира analytics/pixels и разрешава реалните Blogger заявки, TraceDeTrail и iRun iframes. Проверка на регистрационния iframe означава, че формата се визуализира; не е извършена регистрация или плащане. Тези ограничения са за репетицията и трябва да се прегледат преди публичното пускане. Не пренасяй механично preview CSP в production.

## Поправка на картите

Петте TraceDeTrail iframe-а вече използват отложено зареждане (`loading="lazy"`), така че външната карта да не се инициализира преди браузърът да може да я покаже. Маршрутите и GPX файловете са запазени. 14 браузърни проверки в изолираното копие покриха всички дистанции, повторно преминаване от новините през менюто, скриване/показване на таба, BG/EN, mobile навигация и reload. Всички карти се изрисуваха, без предупреждение за нулев размер на контейнера. Самият HTTP 200 не е използван като доказателство за визуализирана карта.

## DNS прехвърляне и връщане

Сайтът и пощата са отделени: A на сайта към новия VPS, а mail/MX към Jump.bg. Точните стойности и процедурата за бъдещите пощенски кутии са в [DNS и поща](dns-and-mail.md). Публичното активиране се прави след архив и локална репетиция на Nginx, после проверка от външна мрежа с `curl --resolve`, преди смяната на DNS.

Архивите и еднократните скриптове за активиране/връщане са в `/root/rhodo-cutover-20261025T144437Z/`. Автоматичният Nginx rollback timer се спира след успешните проверки и преди DNS промяната. След DNS сайтът се проверява през реалните адреси и се активира certificate renewal. При проблем A на сайта може да се върне към `173.212.247.104`, като съзнателно отделената поща остава към Jump.bg.

Старият Rhodo остава включен през DNS прехода. Не спирай стария VPS, преди всички негови нужни услуги и архиви да са отчетени; не възстановявай целия VPS snapshot върху реалните BTR данни.
