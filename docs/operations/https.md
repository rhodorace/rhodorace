# Rhodo HTTPS и автоматично подновяване

Основното [сървърно ръководство](production.md) описва SSH, deploy, rollback и директориите. Този файл описва сертификатите. Версионираните инструменти са в [`scripts/production`](../../scripts/production/).

## Какво е готово

На 25.10.2026 е издаден нов Let's Encrypt сертификат за **rhodo-rock.com и www.rhodo-rock.com**, валиден до **23.01.2027**. Nginx на новия VPS използва него: на `127.0.0.1:8443` за частните проверки и на публичния 443 след активиране. Двата временни DNS TXT записа са добавени като допълнителни стойности, а после са премахнати; всички 40 съществуващи записа, включително предишните TXT стойности и A/AAAA/CNAME/MX, са запазени.

Първоначалното издаване е извършено преди DNS прехвърлянето и не променя стария сайт. Публичният listener на новия VPS използва същия нов сертификат след активиране. Сертификатът и ключът остават на новия VPS с root достъп; не се записват в Git или на Mac-а.

Rhodo използва собствена Certbot конфигурация `/etc/rhodo-production/acme`, отделни работни файлове и логове. За издаването е използвана съществуващата ACME идентичност чрез частно root копие; не е регистриран нов акаунт и не са променени BTR настройките. Глобалният `certbot.timer` продължава да обслужва BTR.

## Защо активирането следва DNS прехвърлянето

Първото издаване използва DNS-01 с временни TXT записи. Това издава валиден сертификат, но **само по себе си не прави автоматично подновяване**. За бъдещите подновявания е подготвен HTTP-01 webroot, който не изисква DNS API пароли на VPS.

HTTP-01 проверката трябва да достигне домейна на порт 80. Докато неговият публичен DNS сочи стария сървър, новият VPS не може да докаже, че обслужва този път. Преди cutover `rhodo-certbot.timer` остава изключен, а маркерът `renewal-enabled` липсва. След успешната команда `--activate` timer-ът е включен и маркерът е налице. Реалният статус се проверява с `--check`; само издаден сертификат не доказва автоматично подновяване.

Официални източници: [Let's Encrypt — challenge types](https://letsencrypt.org/docs/challenge-types/), [Certbot — manual и webroot](https://eff-certbot.readthedocs.io/en/stable/using.html#getting-certificates-and-choosing-plugins), [Certbot — reconfigure](https://eff-certbot.readthedocs.io/en/stable/using.html#modifying-the-renewal-configuration-of-existing-certificates).

## Проверка с една команда

След SSH вход като `ubuntu`:

```bash
sudo python3 -I /usr/local/libexec/rhodo-production/certificate-renewal.py --check
```

Командата показва срока на сертификата, домейните, DNS адресите и дали renewal е активен. Не издава сертификат, не включва timer и не рестартира услуги. Преди cutover очакваните полета са `dns_ready: false`, `webroot_configured: false`, `renewal_enabled: false`.

## Активиране при отделно одобреното публично прехвърляне

Администраторът трябва първо да включи публичните Rhodo Nginx virtual hosts, да добави HTTP ACME location-а и да прехвърли/провери DNS. Подготвеният шаблон е `/etc/rhodo-production/prepared/nginx-acme-http.conf`, а версията му в Git е [`scripts/production/nginx-acme-http.conf`](../../scripts/production/nginx-acme-http.conf). Публичният Rhodo Nginx шаблон включва този ACME location и на HTTP, и на HTTPS; частната репетиция не го публикува.

След това се изпълнява:

```bash
sudo python3 -I /usr/local/libexec/rhodo-production/certificate-renewal.py --activate
```

Едната команда:

1. Проверява, че и двата домейна разрешават само адресите на новия VPS и имат IPv4 `169.58.175.172`. Стар или неочакван IPv4/IPv6 адрес спира операцията.
2. Проверява през HTTP точния публичен ACME marker от `/var/www/rhodo-acme` за двата домейна. При липсващ/грешен път спира преди промени.
3. Прави частен архив на Rhodo конфигурацията и състоянието.
4. Изпълнява `certbot reconfigure` за преминаване към webroot, със staging проверката на Certbot.
5. Изпълнява dry-run с deploy hook. Hook-ът проверява имената и срока, прави `nginx -t` и graceful reload. Не спира Node, PHP, MySQL или VPS.
6. Едва след успех създава защитен маркер и включва `rhodo-certbot.timer`. При проблем с включването премахва маркера и изключва само този timer.

Не изпълнявай тази команда като начин за DNS прехвърляне — тя не променя DNS и не публикува сайта. Докато DNS е старият, отказът ѝ е умишлен и е проверен на реалния VPS. При бъдеща промяна на VPS адресите allowlist-ът в root-owned инструмента изисква администраторско обновяване.

## След активирането

Timer-ът проверява два пъти дневно с разсейване до един час; Certbot подновява само когато е необходимо. Пропусната проверка при изключен VPS се изпълнява след boot. Root-owned deploy hook-ът действа само за Rhodo lineage-а и прави graceful Nginx reload, за да се използва новият сертификат.

```bash
sudo systemctl list-timers rhodo-certbot.timer --no-pager
sudo journalctl -u rhodo-certbot.service -n 60 --no-pager
sudo python3 -I /usr/local/libexec/rhodo-production/certificate-renewal.py --check
```

## Файлове и защита

| Път | Предназначение |
| --- | --- |
| `/etc/rhodo-production/acme/live/rhodo-production/` | Управляваните certificate/key symlink-и, използвани от Nginx. |
| `/etc/rhodo-production/acme/archive/` | Реалните Certbot версии на сертификата и ключа. |
| `/etc/rhodo-production/acme/renewal/` | Параметрите за бъдещото подновяване. |
| `/etc/rhodo-production/acme/renewal-hooks/deploy/40-rhodo-nginx-reload` | Проверен Rhodo-only hook за сертификата и reload. |
| `/etc/rhodo-production/renewal-enabled` | Root-only маркер, създаван след успешната HTTP проверка. |
| `/var/lib/rhodo-production-deploy/certbot-work/` | Отделни работни файлове и lock-ове на Certbot. |
| `/var/log/rhodo-certbot/` | Частните диагностични логове на Rhodo Certbot. |
| `/var/www/rhodo-acme/.well-known/acme-challenge/` | Само публични validation файлове; няма приложен код или ключове. |

Нормалният deploy архив включва Rhodo Certbot конфигурацията и unit-ите; архивите съдържат чувствителни ключове и остават само за root. Предишните копирани сертификати в `/etc/rhodo-production/tls/` са запазени за връщане. Не ги трий преди приключена миграция и не възстановявай цял VPS snapshot върху активните BTR данни.
