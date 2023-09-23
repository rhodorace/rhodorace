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
import Image from 'next/image'
import arda from '../public/images/arda.jpg'

export default function Home() {
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
                                Изживейте природата на Родопите: Маратонът като никога преди
                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-500">
                                Маратонът в Родопите не е само състезание, това е възможност да се потопите в най-дивата и красива природа на Родопите.
                                Събитието включва разнообразни маршрути, където ще преодолеете върхове и долини, реки и горски пътеки.
                                Независимо дали сте професионален спортист или просто обичате приключенията на открито,
                                този маратон ще ви предостави неповторимо опит за изживяване на природата.
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>
            <FrequentlyAskedQuestions />
            <Footer />
        </>
    );
}
