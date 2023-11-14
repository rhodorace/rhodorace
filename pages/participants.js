import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from "@/components/container";
import { useRouter } from "next/router";

export default function Participants() {
    const { t } = useTranslation();
    const router = useRouter();
    let participantsURL = "https://www.irun.bg/external.php/competition/runners/name/rhodo-rock-2024"

    if (router.locale === "en") {
        participantsURL += "?s_lang=en_GB";
    } else {
        participantsURL += "?s_lang=bg_BG";
    }

    const content = <>
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:order-1">
                        <div className="flex justify-center py-4 pt-8 lg:pt-4">
                            <iframe className='w-full max-w-screen-xl' src={participantsURL} scrolling="no" marginheight="0" marginwidth="0"
                                frameborder="0" width="600" height="800" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
    return (
        <Container content={content} />
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