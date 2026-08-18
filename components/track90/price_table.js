import { useTranslation } from 'next-i18next';
import { Card, Typography } from "@material-tailwind/react";

export default function PriceTable() {
    const { t } = useTranslation();
    const TABLE_HEAD = [t("FROM"), t("TILL"), t("PRICE")];
    const TABLE_ROWS = [
        {
            from: "18.08.2026",
            till: "05.02.2027",
            price: "68 eur"
        },
        {
            from: "06.02.2027",
            till: "09.04.2027",
            price: "75 eur"
        },
        {
            from: "10.04.2027",
            till: "07.05.2027",
            price: "85 eur"
        }
    ];

    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ from, till, price }, index) => {
                        const classes = index === TABLE_ROWS.length - 1
                            ? "p-4"
                            : "border-b border-blue-gray-50 p-4";

                        return (
                            <tr key={from}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">{from}</Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">{till}</Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">{price}</Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}
