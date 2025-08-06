import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
    InformationCircleIcon,
    MapIcon,
} from "@heroicons/react/24/solid";
import Results from "@/components/history/2025/results";
import Gallery from "@/components/history/2025/gallery";
import HistoryTabs from "@/components/history-tabs";
import Container from "@/components/container";

export default function Index() {
    const { t } = useTranslation();
    const data = [
        {
            label: t("RESULTS"),
            value: "results",
            icon: MapIcon,
            desc: <Results />

        },
        {
            label: t("GALLERY"),
            value: "gallery",
            icon: InformationCircleIcon,
            desc: <Gallery />
        },
    ];

    const content = <>
        <div
            className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
                <div className="rhodo-stripe green">
                    <div className="text-center">
                        <h1 className="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">{t("HISTORY")} 2024</h1>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:order-1">
                        <div className="justify-center py-4 pt-8 lg:pt-4">
                            <HistoryTabs tabs={data} />
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
    const {locale} = context

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}