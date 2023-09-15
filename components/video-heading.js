import logo from "../public/logo.png";
import one from "../public/images/one.svg";
import Image from "next/image";

export default function VideoHeading() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
                {/* <video className="h-full w-full rounded-lg" controls autoPlay>
                    <source src="/videos/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <video id="cbb795d9-1a70-23c9-0010-fccc2a385aa6-video" autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" >
                    {/* <source src="https://global-uploads.webflow.com/6352490b77ca662818abc793/64638e5059c2681e8a35f953_DEF_ZM_Homepage 15 sec_1080p-transcode.mp4" data-wf-ignore="true"/> */}
                    <source src="/videos/intro-video.mp4" data-wf-ignore="true" />
                </video>
                {/* makes the video darker */}
                {/* <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" /> */}
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Image
                                priority
                                src={logo}
                             
                                className="h-auto max-w-full rounded-lg"
                                alt="RhodoRace Momchilgrad"
                            />
                             {/* <Image
                                priority
                                src={one}
                             
                               width={200}
                               
                                alt="RhodoRace Momchilgrad"
                            /> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}