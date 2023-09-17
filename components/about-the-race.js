import {
    Card,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";

export default function AboutTheRaceSection() {
    return (
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">
                <div className="mt-32 flex flex-wrap items-center">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <Typography
                            variant="h3"
                            className="mb-3 font-bold"
                            color="blue-gray"
                        >
                            Старт на приключението: Маратонът в Родопите
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                            Добре дошли на най-забележителния маратон в Родопите! Това уникално спортно събитие събира стотици участници от цял свят в сърцето на Родопите, близо до красивия град Момчилград.
                            Маратонът представлява истинско приключение за всички любители на спорта, предизвикателствата на планинските маршрути и красотата на природата.
                            Готови ли сте да изпитате тази невероятна атмосфера?
                        </Typography>
                        <Button variant="outlined">РЕГИСТРИРАЙ СЕ</Button>
                    </div>
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                        <Card className="shadow-lg shadow-gray-500/10">
                            <Image
                                alt="Card Image"
                                src="/images/rekke.jpg"
                                className="rounded-2xl"
                                width={600}
                                height={100}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}