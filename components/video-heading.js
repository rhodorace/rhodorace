export default function VideoHeading() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
                {/* <video className="h-full w-full rounded-lg" controls autoPlay>
                    <source src="/videos/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                {/* <source src="https://global-uploads.webflow.com/6352490b77ca662818abc793/64638e5059c2681e8a35f953_DEF_ZM_Homepage 15 sec_1080p-transcode.mp4" data-wf-ignore="true"/> */}
                <video id="cbb795d9-1a70-23c9-0010-fccc2a385aa6-video" autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" >
                    <source src="/videos/intro-video.mp4" data-wf-ignore="true" />
                </video>
                {/* <div className="max-w-8xl container relative mt-96">
                    <div>
                        <div className="rhodo-stripe blue grid gap-2 grid-cols-2">
                            <div className="text-right">
                                <h1 class="mb-4 mt-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">RHODO&nbsp;RACE</h1>
                            </div>

                            <div className="lg:text-left sm:text-right">
                                <h1 class="mb-4 mt-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">21 APRIL</h1>
                            </div>
                        </div>
                        <div className="rhodo-stripe green grid gap-2 grid-cols-2">
                            <div className="text-right">
                                <h1 class="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">MOMCHILGRAD</h1>
                            </div>

                            <div className="lg:text-left sm:text-right">
                                <h1 class="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">2024</h1>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}