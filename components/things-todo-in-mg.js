import { Typography } from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from "next/image";

export default function ThingsToDoInMg() {
    const { t } = useTranslation();

    return (
        <div>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("MOMCHILGRAD")}</h2>
                <Typography>
                    {t("MOMCHILGRAD_INFO")}
                </Typography>
                <div className="flex items-center justify-center mt-5">
                    <Image
                        alt="Athlets"
                        src="/images/mg.png"
                        className="rounded-xl"
                        width={700}
                        height={200}
                    />
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("TATUL")}</h2>
                <Typography>
                    {t("TATUL_INFO")}
                </Typography>
                <div className="flex space-x-4 mt-5">
                    <Image
                        alt="Athlets"
                        src="/images/tatul1.png"
                        className="w-1/2 rounded-xl"
                        width={600}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/tatul2.png"
                        className="w-1/2 rounded-xl"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("DAMBALA")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/dambali1.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div class="w-1/2">
                        <Typography>
                            {t("DAMBALA_INFO_1")}
                        </Typography>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/2">
                        <Typography>
                            {t("DAMBALA_INFO_2")}
                        </Typography>
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/dambali2.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("PETRIFIED_FOREST")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/vkamenenagora.png"
                            className="rounded-xl"
                            width={300}
                            height={100}
                        />
                    </div>
                    <div class="w-1/2">
                        <Typography>
                            {t("PETRIFIED_FOREST_INFO")}
                        </Typography>
                    </div>
                </div>

            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("HARMAN_KAYA")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/harmankaya1.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div class="w-1/2">
                        <Typography>
                            {t("HARMAN_KAYA_INFO")}
                        </Typography>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-1/2">

                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/harmankaya2.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("ELMALI_BABA")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2">
                        <Typography>
                            {t("ELMALI_BABA_INFO")}
                        </Typography>
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/elmali.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("LESOPARK")}</h2>
                <div class="flex items-center">
                    <div className="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/lesopark.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div className="w-1/2">
                        <Typography>
                            {t("LESOPARK_INFO")}
                        </Typography>
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("VODNI_LILI")}</h2>
                <div class="flex items-center">
                    <div className="w-1/2">
                        <Typography>
                            {t("VODNI_LILI_INFO")}
                        </Typography>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/lili.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("SKALNI_NISHI")}</h2>
                <Typography>
                    {t("SKALNI_NISHI_INFO")}
                </Typography>
                <div className="flex space-x-4 mt-5">
                    <Image
                        alt="Athlets"
                        src="/images/nishi1.png"
                        className="w-1/2 rounded-xl"
                        width={600}
                        height={200}
                    />
                    <Image
                        alt="Athlets"
                        src="/images/nishi2.png"
                        className="w-1/2 rounded-xl"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("STUDEN_KLADENEC")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/studen1.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div class="w-1/2">
                        <Typography>
                            {t("STUDEN_KLADENEC_INFO")}
                        </Typography>
                    </div>
                </div>
                <div class="flex items-center mt-5">
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/studen2.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/studen3.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("CHURCH")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Athlets"
                            src="/images/curch1.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div class="w-1/2">
                        <Typography>
                            {t("CHURCH_INFO")}
                        </Typography>
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("MOSQUE")}</h2>
                <div class="flex items-center">
                    <div class="w-1/2">
                        <Typography>
                            {t("MOSQUE_INFO")}
                        </Typography>
                    </div>
                    <div class="w-1/2 flex items-center justify-center">
                        <Image
                            alt="Mosque"
                            src="/images/mosque1.png"
                            className="rounded-xl"
                            width={400}
                            height={100}
                        />
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">{t("SPORTS")}</h2>
                <Typography>
                    {t("SPORTS_INFO")}
                </Typography>
                <div className="flex space-x-4 mt-5">
                    <Image
                        alt="Stadium"
                        src="/images/stad1.png"
                        className="w-1/2 rounded-xl"
                        width={600}
                        height={200}
                    />
                    <Image
                        alt="Stadium"
                        src="/images/stad2.png"
                        className="w-1/2 rounded-xl"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
        </div>
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