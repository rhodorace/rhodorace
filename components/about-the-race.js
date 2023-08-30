
import {
    Card,
    Typography,
    Button,
} from "@material-tailwind/react";

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
                            За състезанието
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                            Don't let your uses guess by attaching tooltips and popoves to
                            any element. Just make sure you enable them first via
                            JavaScript.
                            <br />
                            <br />
                            The kit comes with three pre-built pages to help you get started
                            faster. You can change the text and images and you're good to
                            go. Just make sure you enable them first via JavaScript.
                        </Typography>
                        <Button variant="outlined">read more</Button>
                    </div>
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                        <Card className="shadow-lg shadow-gray-500/10">
                            <img
                                alt="Card Image"
                                src="https://nordmarkaskogsmaraton.no/wp-content/uploads/2014/05/langlangrekke.jpg"
                                className="h-full w-full"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}