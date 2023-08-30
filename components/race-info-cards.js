import {
    Card,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faFlag, faFlagCheckered, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function RaceInfoCard() {
    return (
        <><section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                    <CardBody className="px-8 text-center">
                        <IconButton
                            variant="gradient"
                            size="lg"
                            color="blue"
                            className="pointer-events-none mb-6 rounded-full"
                        >
                            <FontAwesomeIcon icon={faRunning}
                                style={{ fontSize: 25 }}
                            />
                        </IconButton>
                        <Typography variant="h5" className="mb-2" color="blue-gray">
                            Дистанция
                        </Typography>
                        <Typography className="font-normal text-blue-gray-600">
                            42.165 КМ
                        </Typography>
                    </CardBody>
                </Card>
                <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
                    <CardBody className="px-8 text-center">
                        <IconButton
                            variant="gradient"
                            size="lg"
                            color="blue"
                            className="pointer-events-none mb-6 rounded-full"
                        >
                            <FontAwesomeIcon icon={faFlag}
                                style={{ fontSize: 25 }}
                            />
                        </IconButton>
                        <Typography variant="h5" className="mb-2" color="blue-gray">
                            Старт
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
                            color="blue"
                            className="pointer-events-none mb-6 rounded-full"
                        >
                            <FontAwesomeIcon icon={faFlagCheckered}
                                style={{ fontSize: 25 }}
                            />
                        </IconButton>
                        <Typography variant="h5" className="mb-2" color="blue-gray">
                            Финал
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
                            color="blue"
                            className="pointer-events-none mb-6 rounded-full"
                        >
                            <FontAwesomeIcon icon={faCalendarAlt}
                                style={{ fontSize: 25 }}
                            />
                        </IconButton>
                        <Typography variant="h5" className="mb-2" color="blue-gray">
                            Дата
                        </Typography>
                        <Typography className="font-normal text-blue-gray-600">
                            01.06.2024
                        </Typography>
                    </CardBody>
                </Card>
            </div>
            </div>
        </section>
          
        </>
    );
}