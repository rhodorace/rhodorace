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
                <h2 class="mb-12 text-center text-3xl font-bold">Харман кая</h2>
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
                            Харман кая е едно от най-мащабните скално-изсечени праисторически култови комплекси в Родопите, намиращо се в землището на село Биволяне.
                            Скално изсеченият археологически обект“ е разположен в едноименната местност, отстояща на половин километър северно и североизточно от махалите Абица и Гъсак на село Биволяне.
                            Мегалитният комплекс се е развил около малка естествена пещера.
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
                <h2 class="mb-12 text-center text-3xl font-bold">Религиозен комплекс „Елмалъ баба текке"</h2>
                <div class="flex items-center">
                    <div class="w-1/2">
                        <Typography>
                            „Елмалъ баба текке" е исторически обособен и действащ религиозен комплекс, състоящ се от тюрбе, джамия, обреден дом и прилежащи сгради.
                            Намира се в близост до с. Биволяне и Харман кая. В теккето ежегодно се организира най-големият събор в региона, посещаван масово от туристи от страната и чужбина.
                            Тюрбето няма аналог в България – в него са разположени 7 безименни гроба.
                            В едната част са погребани шестима мюсюлмански светци, а в другата е гробът на много почитаната майка Фатима.
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
                <h2 class="mb-12 text-center text-3xl font-bold">Лесопарк „Момчил юнак“</h2>
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
                            Лесопарк "Момчил юнак" е обичана и посещавана местност. Намира се над Момчилград и открива прекрасен пейзаж към цялата околност.
                            Има изградена инфраструктура и прекрасни условия за отдих, спорт и почивка.
                            Наблизо е построен и параклис "Св. Дух", около който ежегодно се провеждат общоградски събори.
                        </Typography>
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">Водните лилии</h2>
                <div class="flex items-center">
                    <div className="w-1/2">
                        <Typography>
                            Разположено е в землището на с. Летовник, в региона на Община Момчилград и е единственото в област Кърджали естествено находище на водни лилии.
                            Те цъфтят в края на юни и началото на юли и заемат почти цялата водна повърхност на езерото.
                            Гледката е изключително красива и впечатлява всеки.
                            Никой не помни кога за първи път в езерото са се появили лилиите.
                            Уникално красиво езеро, чиято повърхност е покрита с хиляди водни лилии. В света има само 13 такива езера.
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
                <h2 class="mb-12 text-center text-3xl font-bold">Скални ниши, с. Неофит Бозвелиево</h2>
                <Typography>
                    Нишите са разположени на открояваща се скала вдясно от пътя в посока към с. Лале.
                    Издълбани са на достъпно място, във варовик, което се среща сравнително рядко. Те са 11 на брой, разпределени на 2 нива.
                    Сред тях има и недовършени, което дава възможност да се проследи начинът на изсичане.
                    На хълма непосредствено над скалите с нишите има разрушено светилище, районът е осеян с керамика.
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
                <h2 class="mb-12 text-center text-3xl font-bold">Дивечевъдно стопанство „Студен кладенец“</h2>
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
                            Заема площ от 5186 хектара сред изключително красив ландшафт, в района на вливането на река Нановишка в яз. Студен кладенец.
                            Необезпокоявани от хората там обитават елени-лопатари, муфлони, диви свине, сърни, кози, зайци, лисици, вълци, кеклик, яребици и др., а във водите се срещат мряна, скобар, шаран, сом и др.
                            Дивечевъдното стопанство основно се занимава с провеждане на организиран ловен туризъм. В рамките на стопанството се намира скалния масив „Юмрук кая", където гнездят белоглав, черен и египетски лешояд и скални орли, които са защитени в цяла Европа.
                            Убежище намират 219 вида птици, от които 59 са в Червената книга на България и 69 са включени като защитени по „Натура 2000". Тук се среща и дивият червен божур.
                            Стопанството разполага с две хижи – една обновена и една малка хижа на брега на язовира и е предпочитано място за отдих, лов и риболов.
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
                <h2 class="mb-12 text-center text-3xl font-bold">Църквата „Свети цар Борис I Покръстител“</h2>
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
                            „Свети цар Борис I Покръстител“ е православен храм, който се намира в центъра на Момчилград.
                            Църквата датира от 1938 – 1939 г. и е построена на мястото на малък дървен параклис.
                            Като паметник на културата, храмът е основно реставриран и е осветен след 3-годишен ремонт на храмовия празник 2 май през 2009 г.
                            Църквата е прочута с уникалната си дърворезба на иконостаса и владишкия престол.
                        </Typography>
                    </div>
                </div>
            </section>
            <section class="mb-16 text-center md:text-left">
                <h2 class="mb-12 text-center text-3xl font-bold">Старата градска джамия</h2>
                <div class="flex items-center">
                    <div class="w-1/2">
                        <Typography>
                            Старата джамия е построена преди около 300 години. От самото си изграждане до днес винаги е била действащ религиозен храм.
                            Уникална е с това, че e единствената джамия в област Кърджали с две минарета. През 2004г е извършена основна реставрация на храма.
                            Намира се от дясната страна на пътя, пресичащ централната част на град Момчилград, в непосредствена близост до РУ "Полиция" и Горското стопанство.
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
                <h2 class="mb-12 text-center text-3xl font-bold">Спортни съоръжения</h2>
                <Typography>
                    Момчилград разполага с един от най-добрите спортни бази в Южна България – стадион „Хасан Семерджи“ и спортен комплекс Наим Сюлейманоглу.
                    Тук тренират отборите на известни спортни клубове, сред които участникът в Първа лига Арда, както и водещи тенис клубове в страната.
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