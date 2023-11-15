import Stripes from "./stripes";
import React from "react";

export default function VideoHeading() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center">
                <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
                <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" >
                    <source src="/videos/testmovie.mp4" data-wf-ignore="true" />
                </video>
                <Stripes />
            </div>
        </>
    );
}