import React from "react";
import Image from "next/image";
import bgLogo from "../public/bgLogo.svg";
import track_50 from "../public/images/track_50.png";
import track_22 from "../public/images/track_22.png";

export default function Stripes() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        if(window.innerWidth <= 960) {
            setOpenNav(true);
        }
    }, []);

    return (
        <div className="max-w-8xl container relative mt-0 sm:mt-44">
            {openNav &&
                <div className="responsiveLogo">
                    <Image
                        priority
                        src={bgLogo}
                        width={200}
                        alt="RhodoRace Momchilgrad"
                    />
                </div>
            }
            <div className="rhodo-stripe blue grid gap-2 grid-cols-2">
                <div className="text-right">
                    <h1 className="mb-4 mt-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">RHODO&nbsp;RACE</h1>
                </div>

                <div className="lg:text-left sm:text-right">
                    <h1 className="mb-4 mt-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">21 APRIL</h1>
                </div>
            </div>
            <div className="rhodo-stripe green grid gap-2 grid-cols-2">
                <div className="text-right">
                    <h1 className="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">MOMCHILGRAD</h1>
                </div>

                <div className="lg:text-left sm:text-right">
                    <h1 className="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">2024</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <Image
                    src={track_50}
                    width={80}
                    alt="Track 1 info"
                />

                <div className="flex justify-center">
                    <Image
                        src={track_22}
                        width={80}
                        alt="Track 1 info"
                    />
                </div>
            </div>
        </div>
    );
}