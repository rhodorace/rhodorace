import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const { t } = useTranslation();
  return (
    <section className="relative bg-gray-50 py-24 px-4">
      <div className="mx-auto w-full px-4 text-center lg:w-6/12">
        <Typography variant="h2" color="blue-gray" className="mb-3">
          {t("FAQ_HEADER")}
        </Typography>
      </div>
      <div className="container mx-auto">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>{t("FAQ_Q1_HEADER")}</AccordionHeader>
          <AccordionBody>
            {t("FAQ_Q1_BODY")}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            {t("FAQ_Q2_HEADER")}
          </AccordionHeader>
          <AccordionBody>
            {t("FAQ_Q2_BODY")}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            {t("FAQ_Q3_HEADER")}
          </AccordionHeader>
          <AccordionBody>
            {t("FAQ_Q3_BODY")}
          </AccordionBody>
        </Accordion>
      </div>
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