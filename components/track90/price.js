import { useTranslation } from 'next-i18next';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import FeeBenefits from '../fee_benefits';
import PriceTable from './price_table';

export default function Price() {
    const { t } = useTranslation();

    return (
        <>
            <FeeBenefits />
            <PriceTable />
            <div className="mt-5">
                <Link href="/sign-up" passHref>
                    <Button variant="outlined">{t("SIGN_UP")}</Button>
                </Link>
            </div>
        </>
    );
}
