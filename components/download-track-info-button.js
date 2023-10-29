import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function DownloadTrackInfoButton({ trackInfoFileName }) {
    const router = useRouter();
    const { t } = useTranslation();

    const handleDownload = () => {
        const downloadUrl = `${router.basePath}/${trackInfoFileName}`;

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'rhodoRock22.gpx';

        link.click();
    };

    return (
        <button onClick={handleDownload}>{t("DOWNLOAD")} GPX</button>
    );
};
export async function getStaticProps(context) {
    const { locale } = context

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}