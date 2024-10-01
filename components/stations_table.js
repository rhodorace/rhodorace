import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Card, Typography } from "@material-tailwind/react";

export default function StationsTable({ tableRows }) {
  const { t } = useTranslation();
    const TABLE_HEAD = [
        t("STATION_NAME"),
        t("STATION_DISTANCE_FROM_START"),
        t("STATION_DISTANCE_FROM_PREVIOUS"),
        t("STATION_CONTROL_TIME"),
        t("STATION_LOCATION")
    ];

    return (
        <>
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
                {tableRows.map(({key, station, distance_start, distance_previous, control_time, location}, index) => {
                    const isLast = index === tableRows.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={key}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {(index+1)}. {station}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {distance_start}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {distance_previous}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                    dangerouslySetInnerHTML={{__html: control_time}}
                                />
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {location}
                                </Typography>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
                </table>
            </Card>
        </>
    );
}

export async function getStaticProps(context) {
    const {locale} = context

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}