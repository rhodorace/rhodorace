# Rhodo Rock

Сайтът на Rhodo Rock използва Next.js Pages Router, React и `next-i18next` за български и английски. Публикациите се зареждат от Blogger; регистрацията се показва чрез външен iRun iframe.

## Проверена среда

Кандидатът за новия Contabo VPS е проверен с Node.js **24.22.1**, npm **11.19.1**, Next.js **16.4.3** и React **18.3.1**. Точните зависимости са фиксирани в `package.json` и `package-lock.json`. Използвай `npm ci`, за да възпроизведеш провереното дърво, вместо да преизчисляваш lock файла.

## Локална работа

```bash
npm ci --ignore-scripts
npm run dev -- --hostname 127.0.0.1
```

Отвори [http://localhost:3000](http://localhost:3000). Страниците са в `pages/`, споделените компоненти — в `components/`, а преводите — в `public/locales/bg/common.json` и `public/locales/en/common.json`.

За реални новини е нужна съществуващата Blogger API настройка. Създай локален, игнориран от Git файл `.env.local` за development или `.env.production.local` за production build:

```dotenv
NEXT_PUBLIC_BLOGGER_API_KEY=replace_with_the_authorized_blogger_key
```

Това е примерна стойност. Реалната настройка не се записва в Git. `NEXT_PUBLIC_` стойностите се вграждат в браузърния JavaScript при build — този ключ не е сървърна тайна. Ограниченията му по API и разрешени приложения се управляват в Google Cloud; виж [официалната документация](https://docs.cloud.google.com/docs/authentication/api-keys).

Промяна на ключа изисква нов build. `APP_ENV` в `build:local`, `build:dev` и `build:prod` не замества стандартния избор на `.env` файлове от Next.js.

## Проверки и частен production build

```bash
npm run lint
npm run build:prod
npm run start -- --hostname 127.0.0.1 --port 3000
```

Build и development използват изрично webpack; lint използва ESLint flat config. Lifecycle scripts не са необходими за проверената инсталация; native обработката на изображенията чрез `sharp` е проверена отделно на Linux.

Преди публикуване проверявай и браузъра: BG → EN → BG на начална страница, новини и статия; запазване на `post_id`; reload и Back/Forward; mobile меню и действително зареждане на Blogger. Смяната на езика запазва страницата и query параметрите, но инициализира наново локалното React UI състояние, например отворено меню или tab.

## Публикуване и статус на миграцията

Новият Contabo VPS е `169.58.175.172`. Deploy инструментът поддържа частна репетиция и production; активният режим се вижда със `--check`. Публичното прехвърляне е отделна административна операция с архив, проверки, DNS и връщане. След активиран production режим нормалното публикуване остава една команда.
- [Сървър и публикуване — човешко ръководство](docs/operations/production.md): SSH, местоположение на проекта, една deploy команда, проверки, rollback, архиви, права, логове и оставащи стъпки за HTTPS/DNS.
- [DNS и отделна поща в Jump.bg](docs/operations/dns-and-mail.md): адресите за сайта и пощата, SPF, Email Routing и създаване на бъдещи кутии.
- [HTTPS и автоматично подновяване](docs/operations/https.md): отделният Certbot на Rhodo, актуалният сертификат, безопасното активиране след DNS cutover и диагностиката.
- [Версионирани deploy инструменти и конфигурации](scripts/production/): root контролер, ограничен build helper, systemd услуга и частни Nginx шаблони.
- [Тестове на deploy транзакцията](tests/deployment/test_rhodo_deploy.py): автоматично връщане при неуспешен старт, health check или запис на state и контролирано ръчно връщане.
- [Защити на сертификатното подновяване](tests/deployment/test_certificate_renewal.py): отказ при стар DNS/липсващ HTTP път и включване на timer само след успешни проверки.

На новия VPS след push в `main`:

```bash
sudo /usr/local/libexec/rhodo-production/deploy-rhodo-production.sh
```

В режим `production` командата проверява едновременно частния и публичния HTTPS listener, HTTP пренасочването и ACME пътя. В `private-preview` проверява само частното копие. Старите `npm run deploy:local`, `deploy:dev` и `deploy:prod` са премахнати. `pm2.config.js` е останала конфигурация от стария сървър и не е процедура за публикуване на новия VPS.

## Известни ограничения

- React 18 се поддържа в проверения Next.js 16 кандидат, но има deprecation предупреждение; бъдещ преход към React 19 изисква отделна проверка на Material Tailwind.
- Material Tailwind предупреждава за бъдеща замяна на `MobileNav` с `Collapse`.
- Запазеният npm audit отчита 3 moderate записа за `postcss-selector-parser` по един advisory. Избраният `6.1.5` е публикуван като поправен backport от поддържащия проекта; суровият advisory диапазон още го включва. Не са прилагани suppressions или overrides: [официална версия](https://github.com/postcss/postcss-selector-parser/releases/tag/6.1.5), [advisory](https://github.com/postcss/postcss-selector-parser/security/advisories/GHSA-rj75-hqrm-r3gf).
- Публикациите запазват редакционния си текст от Blogger, включително когато се отварят през EN адреси.
- Поправено е преждевременното зареждане на TraceDeTrail картите чрез `loading="lazy"`; проверени са менюто, табовете, BG/EN и mobile. Виж [проверките в ръководството](docs/operations/production.md#поправка-на-картите).
- Картите и iRun са външни интеграции. Проверка на iframe URL не доказва успешна регистрация или плащане.
