import { useRouter } from 'next/router';

const REGISTRATION_URLS = {
    bg: 'https://www.irun.bg/external.php/competition/sign/name/rhodo-rock-2027?s_lang=bg_BG',
    en: 'https://www.irun.bg/external.php/competition/sign/name/rhodo-rock-2027?s_lang=en_GB'
};

export default function IrunRegistrationFrame() {
    const router = useRouter();
    const locale = router.locale === 'en' ? 'en' : 'bg';

    return (
        <iframe
            title={locale === 'en' ? 'Rhodo Rock 2027 registration' : 'Регистрация за Rhodo Rock 2027'}
            className="mt-5 w-full"
            src={REGISTRATION_URLS[locale]}
            width="100%"
            height="900"
            frameBorder="0"
        />
    );
}
