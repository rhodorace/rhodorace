import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from "react";
import Container from "@/components/container";
import FeeBenefits from '@/components/fee_benefits';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function SignUp() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    var linkIrun;
    if (router.locale === "en") {
      linkIrun = "https://www.irun.bg/external.php/competition/sign/name/rhodo-rock-2026?s_lang=en_GB";
    } else {
      linkIrun = "https://www.irun.bg/external.php/competition/sign/name/rhodo-rock-2026?s_lang=bg_BG";
    }

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var ua = navigator.userAgent.toLowerCase();
    var supportedExternalIrun = false;
    if (isSafari) {
      //Safari
      document.getElementById("irun_register").style.display = "flex";
      document.getElementById("irun_link").href = linkIrun;
    } else {
      var receiveMessage = function (evt) {
        if (evt.data === 'MM:3PCunsupported') {
          document.getElementById("irun_register").style.display = "flex";
          document.getElementById("irun_link").href = linkIrun;
        } else if (evt.data === 'MM:3PCsupported') {
          supportedExternalIrun = true;
          document.getElementById("irun_iframe").src = linkIrun;
          document.getElementById("irun_iframe").style.display = "block";
          document.getElementById("irun_link2").href = linkIrun;
        }
      };
      window.addEventListener("message", receiveMessage, false);
      setTimeout(function () {
        if (!supportedExternalIrun) {
          document.getElementById("irun_register").style.display = "flex";
          document.getElementById("irun_link").href = linkIrun;
        }
      }, 5000);
    }
  });

  const TABLE_HEAD = [t("FROM"), t("TILL"), "9KM", "21KM", "42KM", "60KM"];

  const TABLE_ROWS = [
    {
      from: "-",
      till: "02.02.2026",
      price9KM: "32 eur",
      price21KM: "38 eur",
      price42KM: "45 eur",
      price60KM: "50 eur",
    },
    {
      from: "03.02.2026",
      till: "13.04.2026",
      price9KM: "38 eur",
      price21KM: "43 eur",
      price42KM: "50 eur",
      price60KM: "55 eur",
    },
    {
      from: "14.04.2026",
      till: "18.05.2026",
      price9KM: "48 eur",
      price21KM: "53 eur",
      price42KM: "60 eur",
      price60KM: "65 eur",
    },
  ];
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <>
              <FeeBenefits />
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
                        {TABLE_ROWS.map(({ from, till, price9KM, price21KM, price42KM, price60KM }, index) => {
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
                              </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                  <div className='mt-5'>

                    <div id="irun_register">
                      <div style={{width: "80%", textAlign: "center"}}>Вашият браузър е ограничил функционалността за
                        записване. За да продължите натиснете бутона по-долу и ще ви се
                          зареди регистрационната форма в нов прозорец, където ще можете да завършите процеса.
                          <a id="irun_link" href="#" target="_blank">Регистрация (натиснете тук)</a>
                        </div>
                      </div>
                      <iframe id="irun_iframe" style={{ display: "none" }} src="" width="100%" height="900px" frameborder="0">
                        Вашият браузър е ограничил функционалността за записване. За да продължите натиснете линка по-долу и ще ви се
                        зареди регистрационната форма в нов прозорец, където ще можете да завършите процеса.
                        <a href="#" id="irun_link2" target="_blank">Регистрация (натиснете тук)</a>
                      </iframe>
                      <iframe src="https://www.irun.bg/cookies/start.html" style={{ display: "none" }}></iframe>
                    </div>
                  
                </AccordionBody>
              </Accordion>
            </>
          </div>
        </div>
      </div>
    </div>
  </>;
  return (
    <Container content={content} />
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