import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function FeeBenefits() {
    const { t } = useTranslation();

    return (
        <>
            <Accordion open={true}>
                <AccordionHeader>{t("FEE_HEADER")}</AccordionHeader>
                <AccordionBody>
                    <ul className="list-disc">
                        <li><span style={{color: "#FFD700"}} className="pr-1">🏅</span>{t("FEE_INCLUDES_1")}</li>
                        <li><span style={{color: "#008CBA"}} className="pr-1">👕</span>{t("FEE_INCLUDES_10")}</li>
                        <li><span style={{color: "#FF5733"}} className="pr-1">🎁</span>{t("FEE_INCLUDES_11")}</li>
                        <li><span style={{color: "#4CAF50"}} className="pr-1">🌄</span>{t("FEE_INCLUDES_2")}</li>
                        <li><span style={{color: "#2196F3"}} className="pr-1">⏱</span>{t("FEE_INCLUDES_3")}</li>
                        <li><span style={{color: "#FF9800"}} className="pr-1">💻</span>{t("FEE_INCLUDES_4")}</li>
                        <li><span style={{color: "#9C27B0"}} className="pr-1">📢</span>{t("FEE_INCLUDES_5")}</li>
                        <li><span style={{color: "#f44336"}} className="pr-1">🚑</span>{t("FEE_INCLUDES_6")}</li>
                        <li><span style={{color: "#4CAF50"}} className="pr-1">📍</span>{t("FEE_INCLUDES_7")}</li>
                        <li><span style={{color: "#3F51B5"}} className="pr-1">📸</span>{t("FEE_INCLUDES_8")}</li>
                        <li><span style={{color: "#009688"}} className="pr-1">📜</span>{t("FEE_INCLUDES_9")}</li>
                        <li><span style={{color: "#CDDC39"}} className="pr-1">⭐</span>{t("FEE_INCLUDES_12")}</li>
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