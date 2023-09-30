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

export default function HeaderButtons({ withLogo }) {
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
                    <MenuItem>{t("ACCOMODATION_BUTTON")}</MenuItem>
                </Link>
                <Link href="/volunteers" passHref>
                    <MenuItem>{t("VOLUNTEERS_BUTTON")}</MenuItem>
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
            <Link href="/history2024" passHref>
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
    // ========= SPONSORS BUTTON =========
    const sponsors = <Link href="/sponsors" passHref>
        <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
            {t("SPONSORS_BUTTON")}
        </Button>
    </Link>;
    // ========= CHANGE LANGUAGE BUTTON =========
    const changeLanguage = <Link href="/contact" passHref>
        <ReactCountryFlag
            className="emojiFlag"
            countryCode="US"
            style={{
                fontSize: '2em',
                lineHeight: '2em',
            }}
            aria-label="United States"
        />
    </Link>;


    const buttonsWithLogo = [registration, tracks, news, info, logo, history, contacts, sponsors, changeLanguage];
    const buttonsWithoutLogo = [registration, tracks, news, info, history, contacts, sponsors, changeLanguage];
    return (
        <>
            {withLogo ? buttonsWithLogo : buttonsWithoutLogo}
        </>
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