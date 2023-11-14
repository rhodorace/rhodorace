import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import FeeBenefits from '../fee_benefits';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import PriceTable from './price_table';

export default function Price() {
  const { t } = useTranslation();

  return (
    <>
      <FeeBenefits />
      <PriceTable/>
      <div className='mt-5'>
        <Link href="/sign-up-irun" passHref>
          <Button variant="outlined">{t("SIGN_UP")}</Button>
        </Link>
      </div>
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