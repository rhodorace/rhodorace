
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
