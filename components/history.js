import React from "react";
import { Navbar } from "@/components/navbar";
import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ButtonGroup, Button } from "@material-tailwind/react";
import { useRouter } from 'next/navigation'

export default function History(props) {
    const router = useRouter();
    const { t } = useTranslation();

    function handleRedirectToGallery() {
        window.open(props.galleryURL, "_blank")
    }

    function handleRedirectToResults() {
        router.push('/')
    }

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
                                                    {t("HISTORY")} {props.year}
                                                </Typography>
                                            </div>
                                            <ButtonGroup color="green" fullWidth>
                                                <Button color="green" onClick={handleRedirectToGallery}>{t("GALLERY")}</Button>
                                                <Button color="green" onClick={handleRedirectToResults}>{t("RESULTS")}</Button>
                                            </ButtonGroup>
                                        </section>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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