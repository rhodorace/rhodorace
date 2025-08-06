import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Results() {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <iframe className='w-full max-w-screen-xl'
                        src="https://race-tracking.com/rhodorock2025/"
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