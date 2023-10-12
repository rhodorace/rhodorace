import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
export default function Volunteers() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative block h-[50vh]">
        <Navbar />
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/mountain.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
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

              </div>
              <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                <Card className="shadow-lg shadow-gray-500/10">
                  <Image
                    alt="Card Image"
                    src="/images/athlets.jpg"
                    className="rounded-2xl"
                    width={600}
                    height={100}
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
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
