import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Sponsors() {
  const { t } = useTranslation();
  const imageSize = 500;
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/background1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="mx-auto w-full pt-4 px-4 text-center lg:w-6/12">
                  <Typography variant="h2" color="blue-gray" className="mb-3">
                  {t("SPONSORS")}
                  </Typography>
                </div>
                <div className="w-full px-4 lg:order-1 ">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                      </div>
                      <div>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
