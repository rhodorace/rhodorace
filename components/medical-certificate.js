import { useTranslation } from 'next-i18next';
import { Card, Typography } from "@material-tailwind/react";

export default function MedicalCertificate() {
  const { t } = useTranslation();

  return (
    <Card className="mt-4 border-l-4 border-blue-500 bg-blue-50 p-4">
      <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
        {t("MEDICAL_CERTIFICATE_HEADER")}
      </Typography>

      <ul className="ml-5 list-disc space-y-1 text-sm leading-snug text-blue-gray-800">
        <li>{t("MEDICAL_CERTIFICATE_BODY_1")}</li>
        <li>{t("MEDICAL_CERTIFICATE_BODY_2")}</li>
        <li>{t("MEDICAL_CERTIFICATE_BODY_3")}</li>
      </ul>
    </Card>
  );
}
