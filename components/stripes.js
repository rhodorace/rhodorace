import React from "react";
import Image from "next/image";
import rhodo_race from "../public/rhodo_race.jpg";
import track_50 from "../public/images/track_50.png";
import track_23 from "../public/images/track_23.png";
import track_9 from "../public/images/track_9.png";

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
                        src={rhodo_race}
                        className="rounded-lg"
                        width={200}
                        alt="RhodoRock Momchilgrad"
                    />
                </div>
            }
            <div className="rhodo-stripe blue grid gap-2 grid-cols-2">
                <div className="text-right">
                    <h1 className="mb-4 mt-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">RHODO&nbsp;ROCK</h1>
                </div>

                <div className="lg:text-left sm:text-right">
                    <h1 className="mb-4 mt-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">7-8 JUNE</h1>
                </div>
            </div>
            <div className="rhodo-stripe green grid gap-2 grid-cols-2">
                <div className="text-right">
                    <h1 className="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">MOMCHILGRAD</h1>
                </div>

                <div className="lg:text-left sm:text-right">
                    <h1 className="mb-4 mt-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">2025</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="container-distance">
                    <div className="top-distance">2400 D+</div>
                    <div className="triangle-distance"></div>
                    <div className="bottom-distance background-blue">60</div>
                </div>
                <div className="container-distance">
                    <div className="top-distance">1730 D+</div>
                    <div className="triangle-distance"></div>
                    <div className="bottom-distance background-green">42</div>
                </div>
                <div className="container-distance">
                    <div className="top-distance">900 D+</div>
                    <div className="triangle-distance"></div>
                    <div className="bottom-distance background-yellow">21</div>
                </div>
                <div className="container-distance">
                    <div className="top-distance">410 D+</div>
                    <div className="triangle-distance"></div>
                    <div className="bottom-distance background-purple">9</div>
                </div>
            </div>
        </div>
    );
}