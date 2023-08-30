import {
    Card,
    CardBody,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Footer from "@/components/footer";
import { NavbarDefault } from "@/components/navbar-default";
import PageTitle from "@/components/layout/page-title";
import { DefaultAccordion } from "@/components/default-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faFlag, faFlagCheckered, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import RaceInfoCard from "@/components/race-info-cards";

export default function Home() {
    return (
        <>

            <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                <NavbarDefault />
            </div>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
                {/* <video className="h-full w-full rounded-lg" controls autoPlay>
                    <source src="/videos/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <video id="cbb795d9-1a70-23c9-0010-fccc2a385aa6-video" autoPlay loop muted playsinline="" data-wf-ignore="true" data-object-fit="cover" >
                    {/* <source src="https://global-uploads.webflow.com/6352490b77ca662818abc793/64638e5059c2681e8a35f953_DEF_ZM_Homepage 15 sec_1080p-transcode.mp4" data-wf-ignore="true"/> */}
                    <source src="/videos/sample2.mp4" data-wf-ignore="true" />
                </video>
                {/* makes the video darker */}
                {/* <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" /> */}
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                RhodoRace Momchilgrad
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                                This is a simple example of a Landing Page you can build using
                                Material Tailwind. It features multiple components based on the
                                Tailwind CSS and Material Design by Google.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            <RaceInfoCard />

            <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="mt-32 flex flex-wrap items-center">
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <Typography
                                variant="h3"
                                className="mb-3 font-bold"
                                color="blue-gray"
                            >
                                За състезанието
                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-500">
                                Don't let your uses guess by attaching tooltips and popoves to
                                any element. Just make sure you enable them first via
                                JavaScript.
                                <br />
                                <br />
                                The kit comes with three pre-built pages to help you get started
                                faster. You can change the text and images and you're good to
                                go. Just make sure you enable them first via JavaScript.
                            </Typography>
                            <Button variant="outlined">read more</Button>
                        </div>
                        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                            <Card className="shadow-lg shadow-gray-500/10">
                                <img
                                    alt="Card Image"
                                    src="https://nordmarkaskogsmaraton.no/wp-content/uploads/2014/05/langlangrekke.jpg"
                                    className="h-full w-full"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="relative bg-gray-50 py-24 px-4">
                <div className="container mx-auto">
                    <PageTitle heading="Често задавани въпроси">
                    </PageTitle>
                    <DefaultAccordion />
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
    );
}
