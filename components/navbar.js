import React from "react";
import {
  MobileNav,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import bgLogo from "../public/bgLogo.svg";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  let myList = [];
  myList.push(<Link href="/sign-up" passHref>
    <Button variant="gradient" className="navbarButton lg:inline-block" color="green">
      РЕГИСТРАЦИЯ
    </Button>
  </Link>);
  myList.push(<Menu allowHover>
    <MenuHandler>
      <Button variant="gradient" className="navbarButton lg:inline-block" color="green">
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
  </Menu>);
  myList.push(<Link href="/news" passHref>
    <Button variant="gradient" className="navbarButton lg:inline-block" color="green">
      НОВИНИ
    </Button>
  </Link>);
  if (openNav === false) {
    myList.push(<Image
      priority
      src={bgLogo}
      width={200}
      alt="RhodoRace Momchilgrad"
    />);
  }
  myList.push(<Link href="/sponsors" passHref>
    <Button variant="gradient" className="navbarButton lg:inline-block" color="green">
      СПОНСОРИ
    </Button>
  </Link>);
  myList.push(<Menu allowHover>
    <MenuHandler>
      <Button variant="gradient" className="navbarButton lg:inline-block" color="green">
        ИСТОРИЯ
      </Button>
    </MenuHandler>
    <MenuList>
      <Link href="/history" passHref>
        <MenuItem>2024</MenuItem>
      </Link>
    </MenuList>
  </Menu>);
  myList.push(<Link href="/contact" passHref>
    <Button variant="gradient" className="navbarButton lg:inline-block" color="green">
      КОНТАКТИ
    </Button>
  </Link>);


  return (
    <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">

      <div className="hidden lg:block">
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {myList}
        </ul>
      </div>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {myList}
          </ul>
        </div>
      </MobileNav>
    </div>
  );
}