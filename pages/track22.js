import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TrackInfoTabs from "@/components/track-info-tabs";
import {
  MapIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import Map from "@/components/track22/map";
import TechnicalDetails from "@/components/track22/technical_details";
import RequiredEquipment from "@/components/track22/required_equipment";
import Teams from "@/components/track22/teams";
import Price from "@/components/track22/price";
import Container from "@/components/container";

export default function Track22() {
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
    },
  ];
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <div className="justify-center py-4 pt-8 lg:pt-4">
              <TrackInfoTabs tabs={data} />
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