import Countdown from 'react-countdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";


export default function Counter() {
    const { t } = useTranslation();
    const time = Date.parse("2025-06-07");

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return <>
            <Card color="gray" variant="gradient" className="w-full max-w-[9rem] md:max-w-[15rem] p-8">
                <CardBody className="p-0">
                    <Typography
                        color="white"
                        className="flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className='text-6xl md:text-8xl' suppressHydrationWarning={true} >{days}</span>
                    </Typography>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <div className='counterText rounded-lg text-center'>{t("DAYS")}</div>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[9rem] md:max-w-[15rem] p-8">
                <CardBody className="p-0">
                    <Typography
                        color="white"
                        className="flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className='text-6xl md:text-8xl' suppressHydrationWarning={true}>{hours}</span>
                    </Typography>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <div className='counterText rounded-lg text-center'>{t("HOUR")}</div>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[9rem] md:max-w-[15rem] mt-2 md:mt-0 p-8">
                <CardBody className="p-0">
                    <Typography
                        color="white"
                        className="flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className='text-6xl md:text-8xl' suppressHydrationWarning={true}>{minutes}</span>
                    </Typography>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <div className='counterText rounded-lg text-center'>{t("MINUTES")}</div>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[9rem] md:max-w-[15rem] mt-2 md:mt-0 p-8">
                <CardBody className="p-0">
                    <Typography
                        color="white"
                        className="flex justify-center gap-1 text-7xl font-normal"
                    >
                        <span className='text-6xl md:text-8xl' suppressHydrationWarning={true}>{seconds}</span>
                    </Typography>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <div className='counterText rounded-lg text-center'>{t("SECONDS")}</div>
                </CardFooter>
            </Card>
        </>;
    };

    return (
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">

                <Typography
                    className="text-center"
                >
                    <span className='text-4xl md:text-6xl' suppressHydrationWarning={true} >{t("COUNTDOWN_HEADER")}</span>
                </Typography>

                <div className="mt-24 flex flex-wrap items-center">

                    <div className="mx-auto -mt-8 w-full px-4 grid grid-cols-2 md:grid-cols-4">
                        <Countdown
                            date={time}
                            renderer={renderer}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export async function getStaticProps(context) {
    const { locale } = context

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}