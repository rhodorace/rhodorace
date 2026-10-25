# Rhodo: сървър, deploy и връщане на версия

Този документ е за човек, който поддържа сайта. Версионираните настройки са в [`scripts/production`](../../scripts/production/), а тестовете на deploy транзакцията — в [`tests/deployment/test_rhodo_deploy.py`](../../tests/deployment/test_rhodo_deploy.py).

## Текущ статус — 25.10.2026

Публичният `rhodo-rock.com` продължава да работи на стария VPS `173.212.247.104`. Новият VPS `169.58.175.172` има работеща **частна production репетиция**, без промяна на DNS и без публично активиране на Rhodo. BTR production и stage вече работят на новия VPS и не бива да се прекъсват при работа по Rhodo.

Rhodo Node слуша само на `127.0.0.1:3002`. Неговият Nginx HTTPS listener е само на `127.0.0.1:8443`, с отделни валидни сертификати за `rhodo-rock.com` и `www.rhodo-rock.com`. Firewall не отваря тези два порта. Външна заявка към новия IP не достига този Rhodo preview. Подготвената команда изрично изисква режима `private-preview` и не може сама да направи публично прехвърляне.

## Как се влиза и къде е проектът

От Terminal на Mac:

```bash
ssh -i ~/.ssh/contabo-vmi3690666-codex ubuntu@169.58.175.172
```

Входът е с личния SSH ключ, не с root парола. Другите устройства трябва да имат собствен предварително разрешен ключ. Никога не копирай частен ключ в Git или в чат. Администраторските действия се изпълняват чрез `sudo`.

Активната версия се намира тук:

```bash
cd /srv/rhodo-rock/current
```

Тази директория е умишлено защитена от обикновения `ubuntu` и от другите сайтове. За разглеждане като потребителя на Rhodo:

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

**В текущия режим това обновява само частната Rhodo репетиция.** Git push сам по себе си не активира версия на Contabo. Публичното прехвърляне е отделен, предварително одобрен етап.

Командата последователно:

1. Заключва deploy процеса, за да няма две едновременни операции, и архивира частно конфигурацията и текущото състояние.
2. Определя точния commit от `main` и изтегля ново отделно копие. Не използва и не променя старите диагностични копия.
3. Изпълнява `npm ci --ignore-scripts` по фиксирания lock файл, без lifecycle hooks, с включени build инструменти.
4. Изпълнява ESLint без предупреждения и `build:prod`. Изтеглянето, npm и build работят като `rhodo-site`, с ограничения на паметта/CPU и без достъп до BTR. Build фазата няма външна мрежа.
5. Защитава release файловете от запис, подготвя отделен runtime cache и атомарно сменя `current`.
6. Рестартира само `rhodo-rock.service`, проверява Node и HTTPS, двата hostname-а, BG/EN, новини, статия и забранени служебни пътища.
7. При грешка след превключването възстановява предишната версия и проверява нея. При неуспешен първи deploy спира само Rhodo, защото няма предишна версия.

Това не е обещание за zero downtime: при активиране има кратък рестарт само на Rhodo Node. Сайтът няма собствена SQL база; тази процедура не прави миграции или промени по BTR. Преди първия публичен cutover ще бъде настроен отделно публичният listener и ще се прегледат подходящите публични headers.

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
| `/etc/rhodo-production/config.json` | Администраторско разрешение за текущия частен режим. |
| `/etc/rhodo-production/tls/` | Частни TLS файлове за двата hostname-а. |
| `/usr/local/libexec/rhodo-production/` | Root-owned deploy контролер и build helper. Приложението не може да ги подменя. |
| `/etc/systemd/system/rhodo-rock.service` | Ограничена Node услуга с автоматичен старт след boot. |
| `/etc/nginx/sites-available/rhodo-private-preview.conf` | Трите localhost HTTPS server блока: два hostname-а и отказ за неизвестен SNI. |
| `/etc/nginx/snippets/rhodo-private-common.conf` | Proxy, static assets, cache headers и preview ограничения. |
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

Сертификатите са валидни до **04.12.2026 около 21:07 UTC**. За този Rhodo listener **автоматично подновяване още не е настроено**. То трябва да се довърши при публичното прехвърляне и да се провери с dry-run; копирането на съществуващ сертификат не настройва renewal.

Версионираните Next assets имат едногодишен immutable cache. Публичните изображения/GPX файлове се четат директно от Nginx с по-кратък cache, HTML минава през Node. Nginx има четене само на публичните файлове, без достъп до source, `.env`, ключове или право за запис. Node има лимит 1 GiB памет и работи без root/capabilities; Next кодът и зависимостите са само за четене.

Частният preview има `noindex`, блокира analytics/pixels и разрешава реалните Blogger заявки, TraceDeTrail и iRun iframes. Проверка на регистрационния iframe означава, че формата се визуализира; не е извършена регистрация или плащане. Тези ограничения са за репетицията и трябва да се прегледат преди публичното пускане. Не пренасяй механично preview CSP в production.

## Наблюдение от браузърната репетиция

TraceDeTrail картата се визуализира успешно при ново отваряне на страницата, включително на mobile. При част от преминаванията през клиентското меню остана празен iframe; външният код съобщи `No map visible because the map container's width or height are 0`. Това е проблем за отделна проверка на инициализацията на iframe в tab панела, преди публичното прехвърляне. Самият доставчик и текущата публична карта са достъпни. Успешният HTTP 200 не е достатъчен за приемане на този сценарий. Този deploy етап не променя приложния код за tab-овете или външния доставчик.

## Преди окончателното прехвърляне

Нужни са отделно одобрение за публично активиране/DNS, финална проверка на стария сайт и съдържанието, публични Nginx настройки, сертификатно подновяване, A/AAAA/www план и проверки от външна мрежа. Старият Rhodo трябва да остане работещ през DNS прехода за бързо връщане. Не спирай стария VPS, преди всички негови нужни услуги и архиви да са отчетени.
