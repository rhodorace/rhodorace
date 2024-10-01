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
      key: 'shturets',
      station: t('STATION_SHTURETS_NAME'),
      distance_start: '22.6 km / 962 D+ / 985 D-',
      distance_previous: '12.9 km / 377 D+ / 900 D-',
      control_time: t('STATION_SHTURETS_CONTROL_TIME'),
      location: '41.61009, 25.5263267',
    },
    {
      key: 'postnik',
      station: t('STATION_POSTNIK_NAME'),
      distance_start: '34.3 km / 1528 D+ / 1453 D-',
      distance_previous: '11.7 km / 460 D+ / 470 D-',
      control_time: t('STATION_POSTNIK_CONTROL_TIME'),
      location: '41.56728, 25.5666',
    },
    {
      key: 'raven_chamlak',
      station: t('STATION_RAVEN_CHAMLAK_NAME'),
      distance_start: '40.5 km / 1696 D+ / 1613 D-',
      distance_previous: '6.2 km / 170 D+ / 160 D-',
      control_time: t('STATION_RAVEN_CHAMLAK_CONTROL_TIME_60'),
      location: '41.5606389, 25.5184722',
    },
    {
      key: 'zli_trap',
      station: t('STATION_ZLI_TRAP_NAME'),
      distance_start: '48.8 km / 2126 D+ / 1810 D-',
      distance_previous: '8.3 km / 430 D+ / 198 D-',
      control_time: t('STATION_ZLI_TRAP_CONTROL_TIME_60'),
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