import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TrackInfoTabs from "@/components/track-info-tabs";

export default function Track2() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative block h-[50vh]">
      <Navbar/>
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/mountain.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:order-1">
                  <div className="justify-center py-4 pt-8 lg:pt-4">
                    <TrackInfoTabs/>
                    </div>
                  </div>
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