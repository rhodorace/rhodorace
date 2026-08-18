import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from "@/components/container";
import { useRouter } from "next/router";

export default function Participants() {
    const router = useRouter();
    const isEnglish = router.locale === "en";
    const participantsURL = `https://www.irun.bg/external.php/competition/runners/name/rhodo-rock-2027?s_lang=${isEnglish ? "en_GB" : "bg_BG"}`;

    const content = <>
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:order-1">
                        <div className="flex justify-center py-4 pt-8 lg:pt-4">
                            <iframe
                                title={isEnglish ? "Rhodo Rock 2027 participants" : "Участници в Rhodo Rock 2027"}
                                className="w-full min-w-max"
                                src={participantsURL}
                                width="600"
                                height="800"
                                frameBorder="0"
                                allowFullScreen
                            />
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
