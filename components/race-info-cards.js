import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faFlag, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function RaceInfoCard() {
    const { t } = useTranslation();
    return (<>
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="px-8 text-center">
                            <IconButton
                                variant="gradient"
                                size="lg"
                                className="trackOneButton pointer-events-none mb-6 rounded-full"
                            >
                                <FontAwesomeIcon icon={faRunning}
                                    style={{ fontSize: 25 }}
                                />
                            </IconButton>
                            <Typography variant="h5" className="mb-2" color="blue-gray">
                                {t("DISTANCE")}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-600">
                                21 КМ
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="px-8 text-center">
                            <IconButton
                                variant="gradient"
                                size="lg"
                                className="trackOneButton pointer-events-none mb-6 rounded-full"
                            >
                                <FontAwesomeIcon icon={faFlag}
                                    style={{ fontSize: 25 }}
                                />
                            </IconButton>
                            <Typography variant="h5" className="mb-2" color="blue-gray">
                                {t("START")}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-600">
                                гр. Момчилград
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="px-8 text-center">
                            <IconButton
                                variant="gradient"
                                size="lg"
                                className="trackOneButton pointer-events-none mb-6 rounded-full"
                            >
                                <FontAwesomeIcon icon={faFlagCheckered}
                                    style={{ fontSize: 25 }}
                                />
                            </IconButton>
                            <Typography variant="h5" className="mb-2" color="blue-gray">
                                {t("FINISH")}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-600">
                                с. Татул
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="px-8 text-center">
                            <IconButton
                                variant="gradient"
                                size="lg"
                                className="trackTwoButton pointer-events-none mb-6 rounded-full"
                            >
                                <FontAwesomeIcon icon={faRunning}
                                    style={{ fontSize: 25 }}
                                />
                            </IconButton>
                            <Typography variant="h5" className="mb-2" color="blue-gray">
                            {t("DISTANCE")}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-600">
                                42 КМ
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="px-8 text-center">
                            <IconButton
                                variant="gradient"
                                size="lg"
                                className="trackTwoButton pointer-events-none mb-6 rounded-full"
                            >
                                <FontAwesomeIcon icon={faFlag}
                                    style={{ fontSize: 25 }}
                                />
                            </IconButton>
                            <Typography variant="h5" className="mb-2" color="blue-gray">
                            {t("START")}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-600">
                                гр. Момчилград
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                        <CardBody className="px-8 text-center">
                            <IconButton
                                variant="gradient"
                                size="lg"
                                className="trackTwoButton pointer-events-none mb-6 rounded-full"
                            >
                                <FontAwesomeIcon icon={faFlagCheckered}
                                    style={{ fontSize: 25 }}
                                />
                            </IconButton>
                            <Typography variant="h5" className="mb-2" color="blue-gray">
                            {t("FINISH")}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-600">
                                с. Багрянка
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    </>

    );
}

export async function getStaticProps(context) {
    // extract the locale identifier from the URL
    const { locale } = context

    return {
        props: {
            // pass the translation props to the page component
            ...(await serverSideTranslations(locale)),
        },
    }
}