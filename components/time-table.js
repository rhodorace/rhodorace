import { Card, Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function TimeTable() {
    const { t } = useTranslation();
    const TABLE_HEAD = [t("FROM"), t("CAR"), t("TRAIN"), t("BUS")];

    const TABLE_ROWS = [
        {
            from: t("SOFIA"),
            distance: t("SOFIA_DISTANCE"),
            train: "2*",
            bus: t("YES")
        }, {
            from: t("PLOVDIV"),
            distance: t("PLOVDIV_DISTANCE"),
            train: "1*",
            bus: t("YES")
        }, {
            from: t("VARNA"),
            distance: t("VARNA_DISTANCE"),
            train: "1*",
            bus: t("YES") + "*"
        }, {
            from: t("BURGAS"),
            distance: t("BURGAS_DISTANCE"),
            train: "0",
            bus: t("YES") + "*"
        }, {
            from: t("RUSE"),
            distance: t("RUSE_DISTANCE"),
            train: "1*",
            bus: t("YES")
        }, {
            from: t("ISTANBUL"),
            distance: t("ISTANBUL_DISTANCE"),
            train: "0",
            bus: t("YES") + "*"
        }, {
            from: t("KOMOTINI"),
            distance: t("KOMOTINI_DISTANCE"),
            train: "0",
            bus: t("NO") + "*"
        },

    ];

    return (
        
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOW_TO_GET_TO_MOMCHILGRAD")}</h2>
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
                <div>{t("REACHING_NOTE")} <b>*</b></div>
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