import { useTranslation } from 'next-i18next';
import { Typography } from "@material-tailwind/react";

export default function RequiredEquipment() {
    const { t } = useTranslation();

    return (
        <>
            <Typography variant="h3" color="black">{t("MANDATORY_EQUIPMENT")}</Typography>
            <div className="mb-5 ml-10">
                <ul className="list-disc">
                    <li>{t("MANDATORY_LIST_ITEM_1")}</li>
                    <li>{t("MANDATORY_LIST_ITEM_2")}</li>
                    <li>{t("RECOMMENDED_LIST_ITEM_3")}</li>
                </ul>
                <Typography variant="paragraph">{t("MANDATORY_FOOTER")}</Typography>
            </div>

            <Typography variant="h3" color="black">{t("RECOMMENDED_EQUIPMENT")}</Typography>
            <div className="ml-10">
                <ul className="list-disc">
                    <li>{t("RECOMMENDED_LIST_ITEM_4")}</li>
                    <li>{t("RECOMMENDED_LIST_ITEM_5")}</li>
                    <li>{t("RECOMMENDED_LIST_ITEM_7")}</li>
                    <li>{t("RECOMMENDED_LIST_ITEM_8")}</li>
                    <li>{t("RECOMMENDED_LIST_ITEM_9")}</li>
                </ul>
                <Typography variant="paragraph">{t("RECOMMENDED_FOOTER")}</Typography>
            </div>
        </>
    );
}
