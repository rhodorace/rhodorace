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
      key: 'momina_salza',
      station: t('STATION_MOMINA_SALZA_NAME'),
      distance_start: '18.4 km / 818 D+ / 750 D-',
      distance_previous: '9.65 km / 240 D+ / 663 D-',
      control_time: t('STATION_MOMINA_SALZA_CONTROL_TIME'),
      location: '41.5946111, 25.5266667',
    },
    {
      key: 'raven_chamlak',
      station: t('STATION_RAVEN_CHAMLAK_NAME'),
      distance_start: '25.4 km / 1055 D+ / 972 D-',
      distance_previous: '7 km / 227 D+ / 222 D-',
      control_time: t('STATION_RAVEN_CHAMLAK_CONTROL_TIME'),
      location: '41.5606389, 25.5184722',
    },
    {
      key: 'zli_trap',
      station: t('STATION_ZLI_TRAP_NAME'),
      distance_start: '33.7 km / 1484 D+ / 1169 D-',
      distance_previous: '8.3 km / 430 D+ / 198 D-',
      control_time: t('STATION_ZLI_TRAP_CONTROL_TIME_21'),
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