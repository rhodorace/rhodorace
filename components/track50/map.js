import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import DownloadTrackInfoButton from '../download-track-info-button';

export default function Map() {
    const { t } = useTranslation();

    return (
        <>
            <DownloadTrackInfoButton trackInfoFileName="rhodoRock48.gpx" /><iframe src="https://tracedetrail.fr/en/trace/trace/236502" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"
                width="100%" height="630" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
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