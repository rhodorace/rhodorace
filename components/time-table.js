import { Card, Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function TimeTable() {
    const { t } = useTranslation();
    const TABLE_HEAD = ["Направление", "Автомобил", "Влак", "Автобус"];

    const TABLE_ROWS = [
        {
            from: "София",
            distance: "(292 км.)2 ч. и 59 мин.",
            train: "2*",
            bus: "Да"
        }, {
            from: "Пловдив",
            distance: "(108 км.)1 ч. и 54 мин.",
            train: "1*",
            bus: "Да"
        }, {
            from: "Варна",
            distance: "(393 км.)5 ч. и 9 мин.",
            train: "1*",
            bus: "Да*"
        }, {
            from: "Бургас",
            distance: "(277 км.)3 ч. и 14 мин.",
            train: "0",
            bus: "Да*"
        }, {
            from: "Русе",
            distance: "(336 км.)4 ч. и 57 мин.",
            train: "1*",
            bus: "Да"
        }, {
            from: "Истанбул",
            distance: "(398 км.)5 ч. и 26 мин.",
            train: "0",
            bus: "Да*"
        },

    ];

    return (
        
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">Как да стигнем до Момчилград</h2>
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ from, distance, train, bus }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={from}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {from}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {distance}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {train}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium"
                                            >
                                                {bus}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
                <div>Забележка: - Броя на автобусите и влаковете с прикачване за отбелязани „*“</div>
            </section>
        
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