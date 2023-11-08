import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/container";

export default function Contact() {
  const { t } = useTranslation();
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1 lg:w-4/12">
            <>
              <Accordion open={true}>
                <AccordionHeader>{t("ORGANIZATIONAL_QUESTIONS")}</AccordionHeader>
                <AccordionBody>
                  <div>
                    <FontAwesomeIcon icon={faPhone}
                      className="contactsIcon"
                    /> +359886008128
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPhone}
                      className="contactsIcon"
                    /> +359878560260
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={true}>
                <AccordionHeader>{t("TECHNICAL_QUESTIONS")}</AccordionHeader>
                <AccordionBody>
                  <div>
                    <FontAwesomeIcon icon={faPhone}
                      className="contactsIcon"
                    /> +359898624511
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