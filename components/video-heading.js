import {
    Typography,
} from "@material-tailwind/react";


export default function VideoHeading() {
    return (
        <>
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
        </>
    );
}