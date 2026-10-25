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

Git push обновява репото. Публичният Rhodo сайт още работи на стария VPS; проверките на новия VPS са направени само в частно изолирано копие. Новият production deploy процес още не е инсталиран и DNS не е променян.

Старите `npm run deploy:local`, `deploy:dev` и `deploy:prod` са премахнати. `pm2.config.js` е останала конфигурация от стария сървър и не е процедура за публикуване на новия VPS. `npm run start` по-горе е частна локална проверка, не deploy.

Следващият етап е отделно одобрена подготовка на ограничена Node услуга, Nginx/HTTPS и процедура за deploy/rollback, след което проверка преди окончателното DNS прехвърляне. При тази подготовка трябва да се документират действително инсталираните настройки и команди.

## Известни ограничения

- React 18 се поддържа в проверения Next.js 16 кандидат, но има deprecation предупреждение; бъдещ преход към React 19 изисква отделна проверка на Material Tailwind.
- Material Tailwind предупреждава за бъдеща замяна на `MobileNav` с `Collapse`.
- Запазеният npm audit отчита 3 moderate записа за `postcss-selector-parser` по един advisory. Избраният `6.1.5` е публикуван като поправен backport от поддържащия проекта; суровият advisory диапазон още го включва. Не са прилагани suppressions или overrides: [официална версия](https://github.com/postcss/postcss-selector-parser/releases/tag/6.1.5), [advisory](https://github.com/postcss/postcss-selector-parser/security/advisories/GHSA-rj75-hqrm-r3gf).
- Публикациите запазват редакционния си текст от Blogger, включително когато се отварят през EN адреси.
- Картите и iRun са външни интеграции. Проверка на iframe URL не доказва успешна регистрация или плащане.
