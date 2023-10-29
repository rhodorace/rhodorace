import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { TECHNICAL_DETAILS_TABLE_INFO } from '@/lib/track50_info';
import TechnicalDetailsTable from '../technical_details_table';

export default function TechnicalDetails() {
  const { t } = useTranslation();
  const TABLE_ROWS = [
    {
      tech_key: t("DISTANCE"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.DISTANCE + " KM"
    }, {
      tech_key: t("TOTAL_CLIMBING"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.TOTAL_CLIMBING + " " + t("METERS")
    }, {
      tech_key: t("TOTAL_DESCENT"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.TOTAL_DESCENT + " " + t("METERS")
    }, {
      tech_key: t("START_DATE"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.START_DATE
    }, {
      tech_key: t("TIME_LIMIT"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.TIME_LIMIT + " " + t("HOURS")
    }, {
      tech_key: t("ITRA_CATEGORY"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.ITRA_CATEGORY + " " + t("POINTS")
    }, {
      tech_key: t("MIN_ELEVATION"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.MIN_ELEVATION + " " + t("M_S_L")
    }, {
      tech_key: t("MAX_ELEVATION"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.MAX_ELEVATION + " " + t("M_S_L")
    }, {
      tech_key: t("AVG_ELEVATION"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.AVG_ELEVATION + " " + t("M_S_L")
    }, {
      tech_key: t("MAX_DIFF"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.MAX_DIFF + " " + t("METERS")
    }, {
      tech_key: t("START_ELEVATION"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.START_ELEVATION + " " + t("M_S_L")
    }, {
      tech_key: t("END_ELEVATION"),
      tech_value: TECHNICAL_DETAILS_TABLE_INFO.END_ELEVATION + " " + t("M_S_L")
    },
  ];
  return (
    <>
      <TechnicalDetailsTable tableRows={TABLE_ROWS}/>
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