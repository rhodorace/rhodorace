import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import Image from "next/image";
import Container from "@/components/container";

export default function Volunteers() {
  const { t } = useTranslation();

  function handleRedirectToVolunteerForm() {
    window.open("https://www.google.com", "_blank")
  }
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="mt-14 flex flex-wrap items-center">
        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            {t("VOLUNTEERS_HEADER")}
          </Typography>
          <Typography className="mb-8 font-normal text-blue-gray-500">
            {t("VOLUNTEERS_BODY")}
          </Typography>
          <Button variant="outlined" className="mb-8" onClick={handleRedirectToVolunteerForm} color="green">{t("REGISTER_AS_VOLUNTEER")}</Button>
        </div>
        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <Card className="shadow-lg shadow-gray-500/10">
            <Image
              alt="Card Image"
              src="/images/volunteers.jpg"
              className="rounded-2xl"
              width={600}
              height={100}
            />
          </Card>
        </div>
      </div>
    </div>
  </>
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
