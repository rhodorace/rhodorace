import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PageTitle from "@/components/layout/page-title";
import { FrequentlyAskedQuestions } from "@/components/frequently-asked-questions";
import RaceInfoCard from "@/components/race-info-cards";
import VideoHeading from "@/components/video-heading";
import AboutTheRaceSection from "@/components/about-the-race";

export default function Home() {
    return (
        <>
            <Navbar />
            <VideoHeading />
            <RaceInfoCard />
            <AboutTheRaceSection />
            <section className="px-4 pt-20 pb-48">
                <div className="container mx-auto">
                    <PageTitle heading="Here are our heroes">
                        According to the National Oceanic and Atmospheric Administration,
                        Ted, Scambos, NSIDClead scentist, puts the potentially record
                        maximum.
                    </PageTitle>
                    <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                    </div>
                </div>
            </section>
            <FrequentlyAskedQuestions />
            <Footer />
        </>
    );
}
