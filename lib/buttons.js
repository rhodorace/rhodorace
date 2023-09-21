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
const logo = <Image
    priority
    src={bgLogo}
    width={200}
    alt="RhodoRace Momchilgrad"
/>;


// ========= SPONSORS BUTTON =========
const sponsors = <Link href="/sponsors" passHref>
    <Button variant="gradient" className="navbarBtn lg:inline-block" color="green">
        СПОНСОРИ
    </Button>
</Link>;

// ========= HISTORY BUTTON =========
const history = <Menu allowHover>
    <MenuHandler>
        <Button variant="gradient" className="lg:inline-block" color="green">
            ИСТОРИЯ
        </Button>
    </MenuHandler>
    <MenuList>
        <Link href="/history" passHref>
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

export function getButtonsWithLogo() {
    return [registration, tracks, news, logo, sponsors, history, contacts]
}

export function getButtonsWithoutLogo() {
    return [registration, tracks, news, sponsors, history, contacts]
}