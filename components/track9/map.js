import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import DownloadTrackInfoButton from '../download-track-info-button';

export default function Map() {
    const { t } = useTranslation();

    return (
        <>
            <DownloadTrackInfoButton trackInfoFileName="RhodoRock9.gpx"/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div className='flex justify-center items-center h-screen'>
                <iframe className='w-full max-w-screen-xl'
                        src="https://tracedetrail.fr/en/iframe/6756" scrolling="no"
                        marginheight="0" marginwidth="0"
                        frameborder="0" width="600" height="800" webkitallowfullscreen mozallowfullscreen
                        allowfullscreen></iframe>
            </div>

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