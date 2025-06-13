import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Sponsors() {
  const DBANK_LINK = "https://www.dbank.bg/bg"
  const MOMCHILGRAD_LINK = "https://www.momchilgrad.bg/"

  const MAIN_SPONSORS = [
    { name: "Devin", link: "https://devin-bg.com/", image: "/images/sponsors/devin-logo.png" },
    { name: "Maxi Market", link: "https://www.facebook.com/MAXI.MOMCHILGRAD", image: "/images/sponsors/maxi-market-logo.jpeg" },
    // { name: "Ballistic Sport", link: "https://ballistic-sport.com/", image: "/images/sponsors/ballistic.png" },
    { name: "Nutrino Lab", link: "https://nutrinolab.com/en/", image: "/images/sponsors/nutrino.jpg" },
    { name: "Airhouse", link: "https://salepointbg.com/", image: "/images/sponsors/airhouse.png" },
    { name: "Osetia Garden", link: "https://osetiahotel.com/bg/", image: "/images/sponsors/osetiagarden.jpg" },
    { name: "Sponser", link: "https://sponser.bg/", image: "/images/sponsors/sponser.jpg" },
    // { name: "Enervit", link: "https://www.facebook.com/profile.php?id=100094393892114", image: "/images/sponsors/enervit.png" },
    { name: "Pirin Hill", link: "https://pirinhill.com/bg/", image: "/images/sponsors/pirin_hill.png" },
    { name: "Varbitsa Milk", link: "https://www.facebook.com/p/%D0%9A%D1%80%D0%B0%D0%B2%D0%B5%D1%84%D0%B5%D1%80%D0%BC%D0%B0-%D0%92%D1%8A%D1%80%D0%B1%D0%B8%D1%86%D0%B0-%D0%9C%D0%B8%D0%BB%D0%BA-%D0%95%D0%9E%D0%9E%D0%94-%D0%B3%D1%80%D9%9F%D0%9C%D0%BE%D0%BC%D1%87%D0%B8%D0%BB%D0%B3%D1%80%D0%B0%D0%B4-100064717603838/", image: "/images/sponsors/vyrbitsa_milk.png" },
    { name: "Woolona", link: "https://woolona.com/", image: "/images/sponsors/woolona.png" },
    { name: "Abopharma", link: "https://abopharma.info/", image: "/images/sponsors/abopharma.png" },
    { name: "Terra Tangra", link: "https://terratangra.com/", image: "/images/sponsors/terra-tangra-log.png" },
    { name: "Oriflame", link: "https://bg.oriflame.com/", image: "/images/sponsors/oriflame.png" },
    { name: "Bowen", link: "https://bowen.bg/", image: "/images/sponsors/bowen.png" }
  ];
  const DEVIN_LINK = "https://devin-bg.com/"
  const TERRA_TANGRA_LINK = "https://terratangra.com/"
  // const MAXI_MARKET_LINK = "https://www.facebook.com/MAXI.MOMCHILGRAD"
  // const BALLISTIC_LINK = "https://ballistic-sport.com/"
  // const AIRHOUSE_LINK = "https://salepointbg.com/"
  // const NUTRINOLAB_LINK = "https://nutrinolab.com/en/"
  // const OSETIAGARDEN_LINK = "https://osetiahotel.com/bg/"
  // const SPONSER_LINK = "https://sponser.bg/"
  //
  // const ABOPHARMA_LINK = "https://abopharma.info/"
  // const BOWEN_LINK = "https://bowen.bg/"
  // const ENERVIT_LINK = "https://www.facebook.com/profile.php?id=100094393892114"
  // const ORIFLAME_LINK = "https://bg.oriflame.com/"
  // const PIRIN_HILL_LINK = "https://pirinhill.com/bg/"
  // const VARBITSA_MILK_LINK = "https://www.facebook.com/p/%D0%9A%D1%80%D0%B0%D0%B2%D0%B5%D1%84%D0%B5%D1%80%D0%BC%D0%B0-%D0%92%D1%8A%D1%80%D0%B1%D0%B8%D1%86%D0%B0-%D0%9C%D0%B8%D0%BB%D0%BA-%D0%95%D0%9E%D0%9E%D0%94-%D0%B3%D1%80%D0%9C%D0%BE%D0%BC%D1%87%D0%B8%D0%BB%D0%B3%D1%80%D0%B0%D0%B4-100064717603838/"
  // const WOOLONA_LINK = "https://woolona.com/"

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

                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link href={MOMCHILGRAD_LINK} target="_blank" passHref>
                        <Image width={imageSize} height={imageSize} className="rounded-lg" src="/images/sponsors/momchilgrad.jpg"
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
                        {MAIN_SPONSORS.map((sponsor, index) => (
                            <Link key={index} href={sponsor.link} target="_blank" passHref>
                            <Image width={imageSize} height={imageSize} className="rounded-lg" src={sponsor.image}
                                     alt={sponsor.name}/>
                            </Link>
                        ))}
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
