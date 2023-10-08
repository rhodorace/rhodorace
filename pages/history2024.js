import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function History2024() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const { t } = useTranslation();
    
    return (
        <>
            <section className="relative block h-[50vh]">
                <Navbar />
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/mountain.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6 ">
                            <div className="flex flex-wrap justify-center">
                                <div class="container mx-auto md:px-6">
                                    <section class="mb-32 text-center md:text-left">
                                        <section className="relative py-12 px-4">
                                            <div className="mx-auto w-full px-4 text-center lg:w-6/12">
                                                <Typography variant="h2" color="blue-gray" className="mb-3">
                                                    История 2024
                                                </Typography>
                                            </div>
                                            <div className="container mx-auto">
                                                <Accordion open={open === 1}>
                                                    <AccordionHeader onClick={() => handleOpen(1)}>Резултати</AccordionHeader>
                                                    <AccordionBody>
                                                        Резултати ...
                                                    </AccordionBody>
                                                </Accordion>
                                                <Accordion open={open === 2}>
                                                    <AccordionHeader onClick={() => handleOpen(2)}>
                                                        Снимки
                                                    </AccordionHeader>
                                                    <AccordionBody>
                                                        Снимки
                                                    </AccordionBody>
                                                </Accordion>
                                            </div>
                                        </section>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
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