import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import StationsTable from '../stations_table';

export default function Stations() {
  const { t } = useTranslation();

  const TABLE_ROWS = [
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