import { useTranslation } from 'next-i18next';
import { TECHNICAL_DETAILS_TABLE_INFO } from '@/lib/track90_info';
import TechnicalDetailsTable from '../technical_details_table';

export default function TechnicalDetails() {
    const { t } = useTranslation();
    const TABLE_ROWS = [
        {
            tech_key: t("DISTANCE"),
            tech_value: TECHNICAL_DETAILS_TABLE_INFO.DISTANCE + " KM"
        },
        {
            tech_key: t("TOTAL_CLIMBING"),
            tech_value: TECHNICAL_DETAILS_TABLE_INFO.TOTAL_CLIMBING + " " + t("METERS")
        },
        {
            tech_key: t("TOTAL_DESCENT"),
            tech_value: TECHNICAL_DETAILS_TABLE_INFO.TOTAL_DESCENT + " " + t("METERS")
        },
        {
            tech_key: t("START_DATE"),
            tech_value: TECHNICAL_DETAILS_TABLE_INFO.START_DATE
        },
        {
            tech_key: t("TIME_LIMIT"),
            tech_value: TECHNICAL_DETAILS_TABLE_INFO.TIME_LIMIT + " " + t("HOURS")
        },
        {
            tech_key: t("NUMBER_OF_AID_STATIONS"),
            tech_value: TECHNICAL_DETAILS_TABLE_INFO.AID_STATIONS
        }
    ];

    return <TechnicalDetailsTable tableRows={TABLE_ROWS} />;
}
