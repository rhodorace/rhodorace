import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import bgLogo from "../public/bgLogo.svg";
import ReactCountryFlag from "react-country-flag";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

export default function HeaderButtons({ withLogo }) {
    const router = useRouter();

    const { t } = useTranslation();
    // ========= REGISTRATION BUTTON =========
    const registration =
        <Link href="/sign-up" className="" passHref>
            <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
                {t("REGISTRATION_BUTTON")}
            </Button>
        </Link>;

    // ========= TRACKS BUTTON =========
    const tracks = <Menu allowHover>
        <MenuHandler>
            <Button variant="gradient" className="lg:inline-block" color="green">
                {t("TRACKS_BUTTON")}
            </Button>
        </MenuHandler>
        <MenuList>
            <Link href="/track1" passHref>
                <MenuItem>21 KM</MenuItem>
            </Link>
            <Link href="/track2" passHref>
                <MenuItem>42 KM</MenuItem>
            </Link>
        </MenuList>
    </Menu>;

    // ========= NEWS BUTTON =========
    const news = <Link href="/news" passHref>
        <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
            {t("NEWS_BUTTON")}
        </Button>
    </Link>;

    // ========= LOGO =========
    const logo = <Link href="/" passHref>
        <Image
            priority
            src={bgLogo}
            width={200}
            alt="RhodoRace Momchilgrad"
        />
    </Link>;


    // ========= INFO BUTTON =========
    const info =
        <Menu allowHover>
            <MenuHandler>
                <Button variant="gradient" className="lg:inline-block" color="green">
                    {t("INFO_BUTTON")}
                </Button>
            </MenuHandler>
            <MenuList>
                <Link href="/accomodation" passHref>
                    <MenuItem>{t("ACCOMODATION")}</MenuItem>
                </Link>
                <Link href="/volunteers" passHref>
                    <MenuItem>{t("VOLUNTEERS")}</MenuItem>
                </Link>
                <Link href="/participants" passHref>
                    <MenuItem>{t("PARTICIPANTS")}</MenuItem>
                </Link>
            </MenuList>
        </Menu>;

    // ========= HISTORY BUTTON =========
    const history = <Menu allowHover>
        <MenuHandler>
            <Button variant="gradient" className="lg:inline-block" color="green">
                {t("HISTORY_BUTTON")}
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
        <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
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