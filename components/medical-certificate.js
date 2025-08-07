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
        <div className="flex items-start">
          <Typography color="blue-gray" className="font-normal leading-relaxed">
            {t("MEDICAL_CERTIFICATE_IMPORTANT")}
            <a 
              href={t("MEDICAL_CERTIFICATE_FORM_LINK")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline ml-1"
            >
              {t("MEDICAL_CERTIFICATE_FORM_LINK")}
            </a>
          </Typography>
        </div>

        <div className="flex items-start">
          <Typography color="blue-gray" className="font-normal leading-relaxed">
            {t("MEDICAL_CERTIFICATE_CLUB_MEMBER")}
          </Typography>
        </div>

        <div className="flex items-start">
          <Typography color="blue-gray" className="font-normal leading-relaxed">
            {t("MEDICAL_CERTIFICATE_ON_SITE")}
          </Typography>
        </div>

        <div className="flex items-start">
          <Typography color="red" className="font-semibold leading-relaxed">
            {t("MEDICAL_CERTIFICATE_WARNING")}
          </Typography>
        </div>
      </div>
    </Card>
  );
} 