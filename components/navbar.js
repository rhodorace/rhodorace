import React from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import {
  Navbar as MaterialNavbar
} from "@material-tailwind/react";
import version1 from "../public/version1.png";
import version2 from "../public/version2.png";
import version3 from "../public/version3.png";
import Image from "next/image";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Button variant="gradient" className="hidden lg:inline-block" color="green">
        <span>РЕГИСТРАЦИЯ</span>
      </Button>
      <Link href="/sign-up">
        <Button variant="gradient" className="hidden lg:inline-block text-white" color="green">
          <span>ТРАСЕТА</span>
        </Button>
      </Link>

      <Button variant="gradient" className="hidden lg:inline-block" color="green">
        <span>ГАЛЕРИЯ</span>
      </Button>
      <Button variant="gradient" className="hidden lg:inline-block" color="green">
        <span>КОНТАКТИ</span>
      </Button>
      <Button variant="gradient" className="hidden lg:inline-block" color="green">
        <span>СПОНСОРИ</span>
      </Button>
    </ul>
  );

  return (
    <div className=" absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
               {/* <Image
              priority
              src={version2}
              height={250}
              width={250}
              alt="RhodoRace Momchilgrad"
            /> */}
      <MaterialNavbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4" style={{ border: "none", backgroundColor: "transparent" }}>
      {/* <Image
              priority
              src={version1}
              height={250}
              width={250}
              alt="RhodoRace Momchilgrad"
              className="h-auto max-w-full rounded-lg"
            /> */}
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          
          {/* <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-white"
          >
          </Typography> */}
          <div className="hidden lg:block">{navList}</div>
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
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Pages</span>
            </Button>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Buy Now</span>
            </Button>
          </div>
        </MobileNav>
      </MaterialNavbar>
    </div>
  );
}