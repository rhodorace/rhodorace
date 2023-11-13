import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Fees() {
    const { t } = useTranslation();

    return (
        <>
            <Accordion open={true}>
                <AccordionHeader>{t("FEE_HEADER")}</AccordionHeader>
                <AccordionBody>
                    <ul className="list-disc">
                        <li>{t("FEE_INCLUDES_1")}</li>
                        <li>{t("FEE_INCLUDES_2")}</li>
                        <li>{t("FEE_INCLUDES_3")}</li>
                        <li>{t("FEE_INCLUDES_4")}</li>
                        <li>{t("FEE_INCLUDES_5")}</li>
                        <li>{t("FEE_INCLUDES_6")}</li>
                        <li>{t("FEE_INCLUDES_7")}</li>
                        <li>{t("FEE_INCLUDES_8")}</li>
                        <li>{t("FEE_INCLUDES_9")}</li>
                        <li>{t("FEE_INCLUDES_10")}</li>
                        <li>{t("FEE_INCLUDES_11")}</li>
                        <li>{t("FEE_INCLUDES_12")}</li>
                    </ul>
                </AccordionBody>
                <AccordionHeader>{t("FEE_FOR_TRACK")}  {" 22KM"}</AccordionHeader>
                <AccordionBody>
                    <ul>
                        <li>{t("TILL") + " 31.01.2024: 55 " + t("BGN")}</li>
                        <li>{t("FROM") + " 01.02.2024 " + t("TILL") + " 15.04.2024: 65 " + t("BGN")}</li>
                        <li>{t("FROM") + " 16.04.2024 " + t("TILL") + " 19.05.2024: 80 " + t("BGN")}</li>
                    </ul>
                </AccordionBody>
                <AccordionHeader>{t("FEE_FOR_TRACK")}  {" 50KM"}</AccordionHeader>
                <AccordionBody>
                    <ul>
                        <li>{t("TILL") + " 31.01.2024: 65 " + t("BGN")}</li>
                        <li>{t("FROM") + " 01.02.2024 " + t("TILL") + " 15.04.2024: 75 " + t("BGN")}</li>
                        <li>{t("FROM") + " 16.04.2024 " + t("TILL") + " 19.05.2024: 90 " + t("BGN")}</li>
                    </ul>
                </AccordionBody>
            </Accordion>
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