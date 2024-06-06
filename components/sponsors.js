import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Sponsors() {
  const DBANK_LINK = "https://www.dbank.bg/bg"
  const DEVIN_LINK = "https://devin-bg.com/"
  const TERRA_TANGRA_LINK = "https://terratangra.com/"
  const MAXI_MARKET_LINK = "https://www.facebook.com/MAXI.MOMCHILGRAD"
  const BALLISTIC_LINK = "https://ballistic-sport.com/"

  const ABOPHARMA_LINK = "https://abopharma.info/"
  const BOWEN_LINK = "https://bowen.bg/"
  const ENERVIT_LINK = "https://www.facebook.com/profile.php?id=100094393892114"
  const ORIFLAME_LINK = "https://bg.oriflame.com/"
  const PIRIN_HILL_LINK = "https://pirinhill.com/bg/"
  const VARBITSA_MILK_LINK = "https://www.facebook.com/p/%D0%9A%D1%80%D0%B0%D0%B2%D0%B5%D1%84%D0%B5%D1%80%D0%BC%D0%B0-%D0%92%D1%8A%D1%80%D0%B1%D0%B8%D1%86%D0%B0-%D0%9C%D0%B8%D0%BB%D0%BA-%D0%95%D0%9E%D0%9E%D0%94-%D0%B3%D1%80%D0%9C%D0%BE%D0%BC%D1%87%D0%B8%D0%BB%D0%B3%D1%80%D0%B0%D0%B4-100064717603838/"
  const WOOLONA_LINK = "https://woolona.com/"

  const { t } = useTranslation();
  const imageSize = 500;
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/sponsors.jpg')] bg-cover bg-center" />
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
                  <Typography variant="h2" color="blue-gray" className="mb-3">
                    {t("GENERAL_SPONSOR")}
                  </Typography>
                  <hr/>
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link href={DBANK_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/dbank-logo.svg"
                               alt=""/>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 lg:order-1 ">
                  <Typography variant="h2" color="blue-gray" className="mb-3">
                    {t("MAIN_SPONSOR")}
                  </Typography>
                  <hr/>
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link href={DEVIN_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/devin-logo.png"
                               alt=""/>
                      </Link>
                      <Link href={TERRA_TANGRA_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/terra-tangra-log.png"
                               alt=""/>
                      </Link>
                      <Link href={MAXI_MARKET_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/maxi-market-logo.jpeg"
                               alt=""/>
                      </Link>
                      <Link href={BALLISTIC_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/ballistic.png"
                               alt=""/>
                      </Link>

                      <Link href={ABOPHARMA_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/abopharma.png"
                               alt=""/>
                      </Link>
                      <Link href={BOWEN_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/bowen.png"
                               alt=""/>
                      </Link>
                      <Link href={ENERVIT_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/enervit.png"
                               alt=""/>
                      </Link>
                      <Link href={ORIFLAME_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/oriflame.png"
                               alt=""/>
                      </Link>
                      <Link href={PIRIN_HILL_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/pirin_hill.png"
                               alt=""/>
                      </Link>
                      <Link href={VARBITSA_MILK_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/vyrbitsa_milk.png"
                               alt=""/>
                      </Link>
                      <Link href={WOOLONA_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/woolona.png"
                               alt=""/>
                      </Link>

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
  const {locale} = context

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}
