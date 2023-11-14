import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function FeeBenefits() {
    const { t } = useTranslation();

    return (
        <>
            <Accordion open={true}>
                <AccordionHeader>{t("FEE_HEADER")}</AccordionHeader>
                <AccordionBody>
                    <ul className="list-disc">
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_1")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_2")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_3")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_4")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_5")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_6")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_7")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_8")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_9")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_10")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_11")}</li>
                        <li><FontAwesomeIcon icon={faCheck}
                            className="accomodationIcon"
                        />{t("FEE_INCLUDES_12")}</li>
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