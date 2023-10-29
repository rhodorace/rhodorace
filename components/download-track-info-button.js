import Link from 'next/link';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button } from '@material-tailwind/react';

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
        <Button className='backGroundGreen mb-5' onClick={handleDownload}>{t("DOWNLOAD")} GPX</Button>
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