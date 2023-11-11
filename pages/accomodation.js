import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Container from "@/components/container";

export default function Accomodation() {
  const { t } = useTranslation();
  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <div class="container mt-12 mx-auto md:px-6">
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_MG_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_MG_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/hotel_mg.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <div>
                    <Link href={"http://www.hijata-mg.com/"} target="_blank" passHref>
                      <FontAwesomeIcon icon={faGlobe}
                        className="accomodationIcon"
                      />{" " + "www.hijata-mg.com"}
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.google.com/maps/place/Hotel+%22Mg%22/@41.538345,25.4119735,18.05z/data=!4m9!3m8!1s0x14ad76f06b595ecf:0xd295f1fd21d46804!5m2!4m1!1i2!8m2!3d41.5382068!4d25.4129688!16s%2Fg%2F11b6dp26kt?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_MAKAZA_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_MAKAZA_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/makaza.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div>
                  <Link href={"https://complex-makaza.com/"} target="_blank" passHref>
                    <FontAwesomeIcon icon={faGlobe}
                      className="accomodationIcon"
                    />{" " + "www.complex-makaza.com"}
                  </Link>
                </div>
                <div>
                  <Link href={"https://www.google.com/maps/place/Complex+Makaza/@41.5603982,25.3845942,14z/data=!4m9!3m8!1s0x14ad76afbaca3bc3:0xe68eebd48b91025b!5m2!4m1!1i2!8m2!3d41.5655577!4d25.3879113!16s%2Fg%2F12hwgnprt?entry=ttu"}
                    target="_blank" passHref>
                    <FontAwesomeIcon icon={faMapLocation}
                      className="accomodationIcon"
                    />{" " + t("LOCATION")}
                  </Link>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("KROYACITE_AND_STUDEN_KLADENEC")}</h2>
                <Typography>
                  {t("KROYACITE_AND_STUDEN_KLADENEC_BODY_1")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/kroyacite_1.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <Typography className='mt-5'>
                  {t("KROYACITE_AND_STUDEN_KLADENEC_BODY_2")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/kroyacite.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <Link href={"https://www.google.com/maps/place/Kroyatsite+lodge+%7C+%D1%85%D0%B8%D0%B6%D0%B0+%D0%9A%D1%80%D0%BE%D1%8F%D1%86%D0%B8%D1%82%D0%B5/@41.6361768,25.5489717,16z/data=!4m9!3m8!1s0x14ad6483ae548b2b:0xc05c438729d5140b!5m2!4m1!1i2!8m2!3d41.6373633!4d25.5646035!16s%2Fg%2F11g8wkqmq1?entry=ttu"}
                    target="_blank" passHref>
                    <FontAwesomeIcon icon={faMapLocation}
                      className="accomodationIcon"
                    />{" " + t("LOCATION")}
                  </Link>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_KONAK_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_KONAK_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/hotel_konak.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <div>
                    <Link href={"https://konak.bg/"} target="_blank" passHref>
                      <FontAwesomeIcon icon={faGlobe}
                        className="accomodationIcon"
                      />{" " + "www.konak.bg"}
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.google.com/maps/place/Hotel+Konak/@41.5379405,25.4134003,16.57z/data=!4m9!3m8!1s0x14ad76f6f839e247:0xd4485d6e6ce8c88a!5m2!4m1!1i2!8m2!3d41.5340771!4d25.4096031!16s%2Fg%2F11fm78h1y7?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_BERITO_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_BERITO_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/berito.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <div>
                    <Link href={"http://www.berito.com/"} target="_blank" passHref>
                      <FontAwesomeIcon icon={faGlobe}
                        className="accomodationIcon"
                      />{" " + "www.berito.com"}
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.google.com/maps/place/Berito/@41.524534,25.412029,16.59z/data=!4m9!3m8!1s0x14ad76598e7152b5:0xf38b91d55b41e248!5m2!4m1!1i2!8m2!3d41.5275431!4d25.4086532!16s%2Fg%2F1thd3_l1?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_TATUL_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_TATUL_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/hotel_tatul.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <div>
                    <FontAwesomeIcon icon={faPhone}
                      className="accomodationIcon"
                    /> +359 876 799 226
                  </div>
                  <div>
                    <Link href={"https://www.google.com/maps/place/%D0%A5%D0%BE%D1%82%D0%B5%D0%BB+%D0%A2%D0%B0%D1%82%D1%83%D0%BB/@41.5196801,25.4139282,16.59z/data=!4m9!3m8!1s0x14ad77ca9920f109:0x5e643320cdeec3f4!5m2!4m1!1i2!8m2!3d41.5162098!4d25.4117338!16s%2Fg%2F11nx1kldxz?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_OSETIA_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_OSETIA_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/hotel_osetia.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <div>
                    <FontAwesomeIcon icon={faPhone}
                      className="accomodationIcon"
                    /> +359 888 861 373
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faGlobe}
                      className="accomodationIcon"
                    />{" " + "info@osetiahotel.com"}
                  </div>
                  <div>
                    <Link href={"https://www.google.com/maps/place/Hotel+Osetia+Garden/@41.5264005,25.4100982,17.55z/data=!4m9!3m8!1s0x14ad77c77ce3000f:0xee5e382e3d896a24!5m2!4m1!1i2!8m2!3d41.5273698!4d25.4095535!16s%2Fg%2F11l1q8ngnl?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HOTEL_CENTRAL_HEADER")}</h2>
                <Typography>
                  {t("HOTEL_CENTRAL_BODY")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                  <Image
                    alt="Athlets"
                    src="/images/hotel_central.jpg"
                    className="rounded-xl"
                    width={700}
                    height={200}
                  />
                </div>
                <div className="mt-5">
                  <div>
                    <FontAwesomeIcon icon={faPhone}
                      className="accomodationIcon"
                    /> +359 887 998899
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faGlobe}
                      className="accomodationIcon"
                    />{" " + "info@aparthotelcentral.com"}
                  </div>
                  <div>
                    <Link href={"https://www.google.com/maps/place/Aparthotel+Central/@41.5268619,25.4099599,17.69z/data=!4m9!3m8!1s0x14ad7659719cd5ff:0x5830b58071ac32a6!5m2!4m1!1i2!8m2!3d41.5267484!4d25.4108493!16s%2Fg%2F11crzwl5qs?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("PLACES_TO_EAT_HEADER")}</h2>
                <ul className="list-disc">
                  <li>{t("HOTEL_MG_HEADER")}</li>
                  <li>{t("HOTEL_MAKAZA_HEADER")}</li>
                  <li>{t("HOTEL_KONAK_HEADER")}</li>
                  <li>{t("PLACES_TO_EAT_LAKE_GARDEN")}</li>
                  <li>{t("PLACES_TO_EAT_OSETIA")}</li>
                  <li>{t("PLACES_TO_EAT_ELIT")}</li>
                  <li>{t("PLACES_TO_EAT_HELIOS")}</li>
                  <li>{t("PLACES_TO_EAT_VODENICATA")}</li>
                  <li>{t("PLACES_TO_EAT_BULGARIA")}</li>
                  <li>{t("PLACES_TO_EAT_STICKHOUSE")}</li>
                  <li>{t("PLACES_TO_EAT_AMOR")}</li>
                  <li>{t("PLACES_TO_EAT_FLYBAR")}</li>
                </ul>
              </section>
              <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("MUSEUMS")}</h2>
                <Typography>
                  {t("MUSEUMS_BODY")}
                </Typography>
                <div className="mt-5">
                  <div>
                    <Link href={"https://www.google.com/maps/place/Community+center+%22New+Life%22/@41.5268177,25.4112533,18.7z/data=!4m6!3m5!1s0x14ad76598ef0c521:0x2b62d3e5ad1e9bcc!8m2!3d41.5261106!4d25.4114402!16s%2Fg%2F11dfpc9tz_?entry=ttu"}
                      target="_blank" passHref>
                      <FontAwesomeIcon icon={faMapLocation}
                        className="accomodationIcon"
                      />{" " + t("LOCATION")}
                    </Link>
                  </div>
                </div>
              </section>
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
