import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  MapIcon,
  LifebuoyIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function TrackInfoTabs() {
    const { t } = useTranslation();

  const data = [
    {
      label: t("MAP"),
      value: "map",
      icon: MapIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: t("TECHNICAL_DETAILS"),
      value: "techdetails",
      icon: InformationCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: t("AID_STATIONS"),
      value: "aidstations",
      icon: LifebuoyIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: t("REQUIRED_EQUIPMENT"),
      value: "equipment",
      icon: Cog8ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: t("TEAMS"),
      value: "teams",
      icon: UserGroupIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: t("PRICE_AND_SIGN_UP"),
      value: "price",
      icon: CurrencyDollarIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="dashboard">
      <TabsHeader className="trackInfoTabHeader">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2" style={{width: "max-content"}}>
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
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