import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const year = new Date().getFullYear();

export default function Footer({ copyright }) {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-gray-50/50">
      <footer className="relative px-4 pt-8 pb-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap pt-6 text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <Typography variant="h4" className="mb-4" color="blue-gray">
                {t("MUNICIPALITY")}
              </Typography>
              <Typography className="font-normal text-blue-gray-500">

              </Typography>
              <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
                <button className="duration-500 rounded-full transform hover:-translate-y-3">
                  <FontAwesomeIcon icon={faYoutube}
                    style={{ color: "red", fontSize: 50 }}
                  />
                </button>
                <button className="duration-500 rounded-full transform hover:-translate-y-3">
                  <FontAwesomeIcon icon={faInstagram}
                    style={{ color: "red", fontSize: 50 }}
                  />
                </button>
                <button className="duration-500 rounded-full transform hover:-translate-y-3">
                  <FontAwesomeIcon icon={faFacebook}
                    style={{ color: "blue", fontSize: 50 }}
                  />
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center">
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                {copyright}
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
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

Footer.defaultProps = {
  copyright: (
    <>
      Copyright © {year} Created by Taner Tasim
    </>
  ),
};