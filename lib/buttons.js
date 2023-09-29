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

// ========= REGISTRATION BUTTON =========
const registration =
    <Link href="/sign-up" className="" passHref>
        <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
            РЕГИСТРАЦИЯ
        </Button>
    </Link>;

// ========= TRACKS BUTTON =========
const tracks = <Menu allowHover>
    <MenuHandler>
        <Button variant="gradient" className="lg:inline-block" color="green">
            ТРАСЕТА
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
        НОВИНИ
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
            ИНФО
        </Button>
    </MenuHandler>
    <MenuList>
        <Link href="/accomodation" passHref>
            <MenuItem>НАСТАНЯВАНЕ</MenuItem>
        </Link>
        <Link href="/volunteers" passHref>
            <MenuItem>ДОБРОВОЛЦИ</MenuItem>
        </Link>
    </MenuList>
</Menu>;

// ========= HISTORY BUTTON =========
const history = <Menu allowHover>
    <MenuHandler>
        <Button variant="gradient" className="lg:inline-block" color="green">
            ИСТОРИЯ
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
        КОНТАКТИ
    </Button>
</Link>;
// ========= SPONSORS BUTTON =========
const sponsors = <Link href="/sponsors" passHref>
    <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
        СПОНСОРИ
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

export function getButtonsWithLogo() {
    return [registration, tracks, news, info, logo, history, contacts, sponsors, changeLanguage]
}

export function getButtonsWithoutLogo() {
    return [registration, tracks, news, info, history, contacts, sponsors, changeLanguage]
}