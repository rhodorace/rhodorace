import { Navbar } from "@/components/navbar";
import { FrequentlyAskedQuestions } from "@/components/frequently-asked-questions";
import VideoHeading from "@/components/video-heading";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Sponsors from "@/components/sponsors";
import HomePageFirstArticle from "@/components/home-page-first-article";
import HomePageSecondArticle from "@/components/home-page-second-article";

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Navbar />
            <VideoHeading />
            <HomePageFirstArticle />
            <HomePageSecondArticle />
            {/* <Sponsors/> */}
            <FrequentlyAskedQuestions />
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
