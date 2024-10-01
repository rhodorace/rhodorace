import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { TECHNICAL_DETAILS_TABLE_INFO } from '@/lib/track9_info';
import StationsTable from '../stations_table';

export default function Stations() {
  const { t } = useTranslation();

  const TABLE_ROWS = [
    {
      key: 'dambala',
      station: t('STATION_DAMBALA_NAME'),
      distance_start: '9.75 km / 585 D+ / 88 D-',
      distance_previous: '9.75 km / 585 D+ / 88 D-',
      control_time: t('STATION_DAMBALA_CONTROL_TIME'),
      location: '41.5643889, 25.4562222',
    },
    {
      key: 'zli_trap',
      station: t('STATION_ZLI_TRAP_NAME'),
      distance_start: '12.6 km / 654 D+ / 338 D-',
      distance_previous: '3.89 km / 69 D+ / 250 D-',
      control_time: t('STATION_ZLI_TRAP_CONTROL_TIME'),
      location: '41.5440278, 25.4746667',
    }
  ];
  return (
    <StationsTable tableRows={TABLE_ROWS} />
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