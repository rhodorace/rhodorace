import { useTranslation } from 'next-i18next';
import { Card, Typography } from "@material-tailwind/react";

export default function MedicalCertificate() {
  const { t } = useTranslation();

  return (
    <Card className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500">
      <Typography variant="h5" color="blue-gray" className="mb-4 font-bold">
        {t("MEDICAL_CERTIFICATE_HEADER")}
      </Typography>
      
      <div className="space-y-4 text-sm">
        <Typography color="blue-gray" className="font-normal leading-relaxed">
          {t("MEDICAL_CERTIFICATE_BODY_1")}
        </Typography>
        <Typography color="blue-gray" className="font-normal leading-relaxed">
          {t("MEDICAL_CERTIFICATE_BODY_2")}
        </Typography>
      </div>
    </Card>
  );
} 