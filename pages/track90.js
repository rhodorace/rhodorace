import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
    Cog8ToothIcon,
    CurrencyDollarIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    MapIcon,
    ShoppingBagIcon
} from "@heroicons/react/24/solid";
import Container from "@/components/container";
import TrackInfoTabs from "@/components/track-info-tabs";
import Map from "@/components/track90/map";
import TechnicalDetails from "@/components/track90/technical_details";
import Stations from "@/components/track90/stations";
import RequiredEquipment from "@/components/track90/required_equipment";
import Price from "@/components/track90/price";

export default function Track88() {
    const { t } = useTranslation();
    const data = [
        {
            label: t("MAP"),
            value: "map",
            icon: MapIcon,
            desc: <Map />
        },
        {
            label: t("TECHNICAL_DETAILS"),
            value: "techdetails",
            icon: InformationCircleIcon,
            desc: <TechnicalDetails />
        },
        {
            label: t("AID_STATIONS"),
            value: "stations",
            icon: ShoppingBagIcon,
            desc: <Stations />
        },
        {
            label: t("REQUIRED_EQUIPMENT"),
            value: "equipment",
            icon: Cog8ToothIcon,
            desc: <RequiredEquipment />
        },
        {
            label: t("PRICE_AND_SIGN_UP"),
            value: "price",
            icon: CurrencyDollarIcon,
            desc: <Price />
        }
    ];

    const content = (
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
                <div className="rhodo-stripe green">
                    <div className="text-center">
                        <h1 className="mb-4 mt-4 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                            88KM
                        </h1>
                    </div>
                </div>
                <div
                    className="mx-4 mt-6 flex items-start gap-3 rounded-xl border-2 border-amber-500 bg-amber-50 px-4 py-4 text-amber-950 shadow-sm sm:mx-8 sm:px-6"
                    role="alert"
                >
                    <ExclamationTriangleIcon className="mt-0.5 h-7 w-7 shrink-0 text-amber-600" aria-hidden="true" />
                    <div>
                        <h2 className="text-lg font-extrabold uppercase tracking-wide">
                            {t("TRACK_88_ENTRY_REQUIREMENT_TITLE")}
                        </h2>
                        <p className="mt-1 text-base font-semibold leading-relaxed sm:text-lg">
                            {t("TRACK_88_ENTRY_REQUIREMENT_BODY")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:order-1">
                        <div className="justify-center py-4 pt-8 lg:pt-4">
                            <TrackInfoTabs tabs={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return <Container content={content} />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
