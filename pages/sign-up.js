import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from "@/components/container";
import FeeBenefits from '@/components/fee_benefits';
import MedicalCertificate from '@/components/medical-certificate';
import IrunRegistrationFrame from '@/components/irun-registration-frame';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";

export default function SignUp() {
  const { t } = useTranslation();

  const TABLE_HEAD = [t("FROM"), t("TILL"), "9KM", "21KM", "42KM", "60KM", "88KM"];

  const TABLE_ROWS = [
    {
      from: "18.08.2026",
      till: "05.02.2027",
      price9KM: "39 eur",
      price21KM: "47 eur",
      price42KM: "54 eur",
      price60KM: "59 eur",
      price88KM: "68 eur",
    },
    {
      from: "06.02.2027",
      till: "09.04.2027",
      price9KM: "45 eur",
      price21KM: "54 eur",
      price42KM: "61 eur",
      price60KM: "66 eur",
      price88KM: "75 eur",
    },
    {
      from: "10.04.2027",
      till: "07.05.2027",
      price9KM: "55 eur",
      price21KM: "64 eur",
      price42KM: "71 eur",
      price60KM: "76 eur",
      price88KM: "85 eur",
    },
  ];
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <>
              <FeeBenefits />
              <MedicalCertificate />
              <Accordion open={true}>
                <AccordionHeader>{t("FEES")}</AccordionHeader>
                <AccordionBody>
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
                        {TABLE_ROWS.map(({ from, till, price9KM, price21KM, price42KM, price60KM, price88KM }, index) => {
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
                                    {till}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                  >
                                    {price9KM}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                  >
                                    {price21KM}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                  >
                                    {price42KM}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                  >
                                    {price60KM}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                  >
                                    {price88KM}
                                  </Typography>
                                </td>
                              </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                  <IrunRegistrationFrame />

                </AccordionBody>
              </Accordion>
            </>
          </div>
        </div>
      </div>
    </div>
  </>;
  return (
      <Container content={content}/>
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
