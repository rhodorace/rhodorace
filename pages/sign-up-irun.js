import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from "@/components/container";
import { useEffect } from 'react';
import { useRouter } from "next/router";

export default function SignUpIrun() {
  const { t } = useTranslation();
  const router = useRouter();


  useEffect(() => {
    var linkIrun;
    if (router.locale === "en") {
      linkIrun = "https://www.irun.bg/external.php/competition/sign/name/rhodo-rock-2025?s_lang=en_GB";
    } else {
      linkIrun = "https://www.irun.bg/external.php/competition/sign/name/rhodo-rock-2025?s_lang=bg_BG";
    }

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var ua = navigator.userAgent.toLowerCase();
    var supportedExternalIrun = false;
    if (isSafari) {
      //Safari
      document.getElementById("irun_register").style.display = "flex";
      document.getElementById("irun_link").href = linkIrun;
    } else {
      var receiveMessage = function (evt) {
        if (evt.data === 'MM:3PCunsupported') {
          document.getElementById("irun_register").style.display = "flex";
          document.getElementById("irun_link").href = linkIrun;
        } else if (evt.data === 'MM:3PCsupported') {
          supportedExternalIrun = true;
          document.getElementById("irun_iframe").src = linkIrun;
          document.getElementById("irun_iframe").style.display = "block";
          document.getElementById("irun_link2").href = linkIrun;
        }
      };
      window.addEventListener("message", receiveMessage, false);
      setTimeout(function () {
        if (!supportedExternalIrun) {
          document.getElementById("irun_register").style.display = "flex";
          document.getElementById("irun_link").href = linkIrun;
        }
      }, 5000);
    }
  });

  const content = <>
    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
      <div className="px-6 rounded-3xl" style={{ backgroundColor: "black" }}>
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:order-1">
            <div className="flex justify-center py-4 pt-8 lg:pt-4">
              <div id="irun_register">
                <div style={{ width: "80%", textAlign: "center" }}>Вашият браузър е ограничил функционалността за записване. За да продължите натиснете бутона по-долу и ще ви се
                  зареди регистрационната форма в нов прозорец, където ще можете да завършите процеса.
                  <a id="irun_link" href="#" target="_blank">Регистрация (натиснете тук)</a>
                </div>
              </div>
              <iframe id="irun_iframe" style={{ display: "none" }} src="" width="100%" height="900px" frameborder="0">
                Вашият браузър е ограничил функционалността за записване. За да продължите натиснете линка по-долу и ще ви се
                зареди регистрационната форма в нов прозорец, където ще можете да завършите процеса.
                <a href="#" id="irun_link2" target="_blank">Регистрация (натиснете тук)</a>
              </iframe>
              <iframe src="https://www.irun.bg/cookies/start.html" style={{ display: "none" }}></iframe>
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
