import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {Card} from "@material-tailwind/react";
import Image from "next/image";

export default function Gallery() {
    const { t } = useTranslation();

    return (
        <>
                <div className="mx-auto mt-2 grid w-full grid-cols-1 gap-4 px-4 md:w-4/12 lg:mt-0 sm:grid-cols-2 md:grid-cols-2">
                    <Image
                        alt="Athlets"
                        src="/images/gallery/2024/1.jpg"
                        className="rounded-2xl"
                        width={700}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/gallery/2024/2.jpg"
                        className="rounded-2xl ml-2"
                        width={700}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/gallery/2024/3.jpg"
                        className="rounded-2xl ml-2"
                        width={700}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/gallery/2024/4.jpg"
                        className="rounded-2xl ml-2"
                        width={700}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/gallery/2024/5.jpg"
                        className="rounded-2xl ml-2"
                        width={700}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/gallery/2024/6.jpg"
                        className="rounded-2xl ml-2"
                        width={700}
                        height={200}
                    />
                </div>

        </>
    );
}

export async function getStaticProps(context) {
    const {locale} = context

    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    }
}