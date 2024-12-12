import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from "@/components/container";
import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function UltraSlam() {
  const { t } = useTranslation();
  const router = useRouter();

  let linkIrun;
  if (router.locale === "en") {
    linkIrun = "https://ultra-slam.com/index1.html";
  } else {
    linkIrun = "https://ultra-slam.com/";
  }

  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6 rounded-3xl" style={{ backgroundColor: "black" }}>
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <div className="flex justify-center py-4 pt-8 lg:pt-4">
              <iframe className='w-full min-w-max' src={linkIrun} width="100%" height="900px" frameborder="0">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
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
