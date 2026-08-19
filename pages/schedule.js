import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Container from "@/components/container";

export default function Schedule() {
  const { t } = useTranslation();
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <h2 className="text-xl font-semibold mb-4">{t("SCHEDULE")}</h2>
            <p className="mb-6 rounded-lg border-l-4 border-green-600 bg-green-50 px-4 py-3 font-semibold text-green-900">
              {t("SCHEDULE_TWO_DAY_NOTICE")}
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold">{t("FRIDAY")}</h3>
                <ul className="list-disc list-inside">
                  <li>{t("FRIDAY_PACKAGE_COLLECTION")}</li>
                  <li>{t("FRIDAY_NOTICE_DECLARATION")}</li>
                  <li>{t("FRIDAY_TECH_CONFERENCE")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t("SATURDAY")}</h3>
                <ul className="list-disc list-inside">
                  <li>{t("SATURDAY_88KM_START")}</li>
                  <li>{t("SATURDAY_60KM_PACKAGE_COLLECTION")}</li>
                  <li>{t("SATURDAY_NOTICE_DECLARATION")}</li>
                  <li>{t("SATURDAY_60KM_START")}</li>
                  <li>{t("SATURDAY_42KM_START")}</li>
                  <li>{t("SATURDAY_21_9_PACKAGE_COLLECTION")}</li>
                  <li>{t("SATURDAY_42KM_FINISH")}</li>
                  <li>{t("SATURDAY_60KM_FINISH")}</li>
                  <li>{t("SATURDAY_AWARD_CEREMONY")}</li>
                  <li>{t("SATURDAY_88KM_FINISH")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t("SUNDAY")}</h3>
                <ul className="list-disc list-inside">
                  <li>{t("SUNDAY_PACKAGE_COLLECTION")}</li>
                  <li>{t("SUNDAY_NOTICE_DECLARATION")}</li>
                  <li>{t("SUNDAY_KIDS_REGISTRATION")}</li>
                  <li>{t("SUNDAY_TECHNICAL_BRIEFING")}</li>
                  <li>{t("SUNDAY_21KM_START")}</li>
                  <li>{t("SUNDAY_9KM_START")}</li>
                  <li>{t("SUNDAY_HIKE_START")}</li>
                  <li>{t("SUNDAY_KIDS_START")}</li>
                  <li>{t("SUNDAY_9KM_FINISH")}</li>
                  <li>{t("SUNDAY_21KM_FINISH")}</li>
                  <li>{t("SUNDAY_AWARD_CEREMONY_9K_21K")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
  return (
      <Container content={content}/>
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
