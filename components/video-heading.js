import Stripes from "./stripes";
import React from "react";

export default function VideoHeading() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth <= 960 && setOpenNav(true),
        );
    }, []);

    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
                <video id="cbb795d9-1a70-23c9-0010-fccc2a385aa6-video" autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" >
                    <source src="/videos/intro.mp4" data-wf-ignore="true" />
                </video>
                <Stripes />
            </div>
        </>
    );
}