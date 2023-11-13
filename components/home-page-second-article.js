import {
    Card,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


export default function HomePageSecondArticle() {
    const { t } = useTranslation();

    return (
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">
                <div className="mt-32 flex flex-wrap items-center">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <Card className="shadow-lg shadow-gray-500/10">
                            <Image
                                alt="Arda river"
                                src="/images/dji.jpg"
                                className="rounded-2xl"
                                width={700}
                                height={200}
                            />
                        </Card>
                    </div>
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <Typography
                            variant="h3"
                            className="mb-3 font-bold"
                            color="blue-gray"
                        >
                            {t("HOME_PAGE_ARTICLE_2_HEADER")}
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                            {t("HOME_PAGE_ARTICLE_2_BODY")}
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
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