import { Navbar } from "@/components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TrackInfoTabs from "@/components/track-info-tabs";
import {
  MapIcon,
  LifebuoyIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import Map from "@/components/track50/map";
import TechnicalDetails from "@/components/track50/technical_details";
import AidStations from "@/components/track50/aid_stations";
import RequiredEquipment from "@/components/track50/required_equipment";
import Teams from "@/components/track50/teams";
import Price from "@/components/track50/price";

export default function Track50() {
  const { t } = useTranslation();

  const data = [
    {
      label: t("MAP"),
      value: "map",
      icon: MapIcon,
      desc: <Map/>

    },
    {
      label: t("TECHNICAL_DETAILS"),
      value: "techdetails",
      icon: InformationCircleIcon,
      desc: <TechnicalDetails/>
    },
    {
      label: t("AID_STATIONS"),
      value: "aidstations",
      icon: LifebuoyIcon,
      desc: <AidStations/>
    },
    {
      label: t("REQUIRED_EQUIPMENT"),
      value: "equipment",
      icon: Cog8ToothIcon,
      desc: <RequiredEquipment/>
    },
    {
      label: t("TEAMS"),
      value: "teams",
      icon: UserGroupIcon,
      desc: <Teams/>
    },
    {
      label: t("PRICE_AND_SIGN_UP"),
      value: "price",
      icon: CurrencyDollarIcon,
      desc: <Price/>
    },
  ];

  return (
    <>
      <section className="relative block h-[50vh]">
        <Navbar />
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/mountain.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
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
        </div>
      </section>
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