import History from "@/components/history";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Index() {
    const { t } = useTranslation();
    return (
        <>
            <History year={2024} galleryURL={"https://google.com/"}/>
        </>
    );
}

export async function getStaticProps(context) {
    const { locale } = context

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}