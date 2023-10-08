import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FrequentlyAskedQuestions } from "@/components/frequently-asked-questions";
import RaceInfoCard from "@/components/race-info-cards";
import VideoHeading from "@/components/video-heading";
import AboutTheRaceSection from "@/components/about-the-race";
import {
    Card,
    Typography,
} from "@material-tailwind/react";
import Image from 'next/image';
import arda from '../public/images/arda.jpg';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Sponsors from "@/components/sponsors";

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Navbar />
            <VideoHeading />
            <RaceInfoCard />
            <AboutTheRaceSection />
            <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="mt-32 flex flex-wrap items-center">
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <Card className="shadow-lg shadow-gray-500/10">
                                <Image
                                    alt="Arda river"
                                    src={arda}
                                    className="rounded-2xl"
                                />
                            </Card>
                        </div>
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <Typography
                                variant="h3"
                                className="mb-3 font-bold"
                                color="blue-gray"
                            >
                                {t("HOME_PAGE_ARTICLE_2_HEADER")}
                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-500">
                                {t("HOME_PAGE_ARTICLE_2_BODY")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>
            <Sponsors/>
            <FrequentlyAskedQuestions />
            <Footer />
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
