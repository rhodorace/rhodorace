import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import rhodo_race from "../public/rhodo_race.jpg";
import ReactCountryFlag from "react-country-flag";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function HeaderButtons({ withLogo }) {
    const router = useRouter();

    const { t } = useTranslation();
    // ========= REGISTRATION BUTTON =========
    const registration =
        <Link href="/sign-up" passHref>
            <Button className="navbarBtn lg:inline-block">
                {t("REGISTRATION_BUTTON")}
            </Button>
        </Link>;

    // ========= TRACKS BUTTON =========
    const tracks = <Menu allowHover>
        <MenuHandler>
            <Button className="lg:inline-block navbarBtn">
                <span className="menuButtonText">{t("TRACKS_BUTTON")}</span>
                <span className="menuButtonSvg">
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className="mx-auto h-4 w-4 transition-transform"
                    />
                </span>
            </Button>
        </MenuHandler>
        <MenuList>
            <Link href="/track9" passHref>
                <MenuItem>9 KM</MenuItem>
            </Link>
            <Link href="/track21" passHref>
                <MenuItem>21 KM</MenuItem>
            </Link>
            <Link href="/track42" passHref>
                <MenuItem>42 KM</MenuItem>
            </Link>
            <Link href="/track60" passHref>
                <MenuItem>60 KM</MenuItem>
            </Link>
        </MenuList>
    </Menu>;

    // ========= NEWS BUTTON =========
    const news = <Link href="/news" passHref>
        <Button className="navbarBtn lg:inline-block">
            {t("NEWS_BUTTON")}
        </Button>
    </Link>;

    // ========= LOGO =========
    const logo = <Link href="/" passHref>
        <Image
            priority
            src={rhodo_race}
            width={200}
            className="rounded-lg"
            alt="RhodoRace Momchilgrad"
        />
    </Link>;


    // ========= INFO BUTTON =========
    const info =
        <Menu allowHover>
            <MenuHandler>
                <Button className="lg:inline-block navbarBtn">
                    <span className="menuButtonText">{t("INFO_BUTTON")}</span>
                    <span className="menuButtonSvg">
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className="mx-auto h-4 w-4 transition-transform"
                        />
                    </span>
                </Button>
            </MenuHandler>
            <MenuList>
                <Link href="/schedule" passHref>
                    <MenuItem>{t("SCHEDULE")}</MenuItem>
                </Link>
                <Link href="/accomodation" passHref>
                    <MenuItem>{t("ACCOMODATION")}</MenuItem>
                </Link>
                <Link href="/volunteers" passHref>
                    <MenuItem>{t("VOLUNTEERS")}</MenuItem>
                </Link>
                <Link href="/participants" passHref>
                    <MenuItem>{t("PARTICIPANTS")}</MenuItem>
                </Link>
                <Link href="/momchilgrad" passHref>
                    <MenuItem>{t("ABOUT_MOMCHILGRAD")}</MenuItem>
                </Link>
                <Link href="/ultra-slam" passHref>
                    <MenuItem>{t("ULTRA_SLAM")}</MenuItem>
                </Link>
            </MenuList>
        </Menu>;

    // ========= HISTORY BUTTON =========
    const history = <Menu allowHover>
        <MenuHandler>
            <Button className="lg:inline-block navbarBtn">
                <span className="menuButtonText">{t("HISTORY_BUTTON")}</span>
                <span className="menuButtonSvgHistory">
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className="mx-auto h-4 w-4 transition-transform"
                    />
                </span>
            </Button>
        </MenuHandler>
        <MenuList>
            <Link href="/history/2024" passHref>
                <MenuItem>2024</MenuItem>
            </Link>
        </MenuList>
    </Menu>;

    // ========= CONTACTS BUTTON =========
    const contacts = <Link href="/contact" passHref>
        <Button className="navbarBtn lg:inline-block">
            {t("CONTACTS_BUTTON")}
        </Button>
    </Link>;
    // ========= CHANGE LANGUAGE BUTTON =========
    let changeLanguage;
    if (router.locale === "en") {
        changeLanguage = <Link href="/bg" passHref>
            <ReactCountryFlag
                className="emojiFlag"
                countryCode="BG"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="Bulgaria"
            />
        </Link>;
    } else if (router.locale === "bg") {
        changeLanguage = <Link href="/en" passHref>
            <ReactCountryFlag
                className="emojiFlag"
                countryCode="GB"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            />
        </Link>;
    }

    const buttonsWithLogo = [registration, tracks, news, info, logo, history, contacts, changeLanguage];
    const buttonsWithoutLogo = [registration, tracks, news, info, history, contacts, changeLanguage];
    return (
        <>
            {withLogo ? buttonsWithLogo : buttonsWithoutLogo}
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