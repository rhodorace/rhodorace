import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Card, Typography } from "@material-tailwind/react";

export default function AidStations() {
  const { t } = useTranslation();
  const TABLE_HEAD = [t("AID_INFO"), t("KM_START_FROM"),t("SUPPLIES"),
  t("GPS_COORDINATES"),t("TO_NEXT_STATION"),t("CUT_OFF")];

  const TABLE_ROWS = [
    // {
    //   aidStation: "John Michael",
    //   kmStartFrom: "Manager",
    //   supplies: "23/04/18",
    //   gpsCoordinates: "",
    //   toNextStation: "",
    //   cutOff: ""
    // },
    
  ];
  
  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
            {/* {TABLE_ROWS.map(({ name, job, date }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {date}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    Edit
                  </Typography>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </Card>
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