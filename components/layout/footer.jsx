import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              <button className="duration-500 rounded-full transform hover:-translate-y-3">
                <FontAwesomeIcon icon={faYoutube}
                  style={{ color: "red", fontSize: 50 }}
                />
              </button>
              <button className="duration-500 rounded-full transform hover:-translate-y-3">
                <FontAwesomeIcon icon={faInstagram}
                  style={{ color: "red", fontSize: 50 }}
                />
              </button>
              <button className="duration-500 rounded-full transform hover:-translate-y-3">
                <FontAwesomeIcon icon={faFacebook}
                  style={{ color: "blue", fontSize: 50 }}
                />
              </button>
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Община Момчилград",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.google.com",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.google.com",
    },
  ],
  menus: [
    {
      name: "Header 1",
      items: [
        { name: "Section 0", path: "https://www.google.com" },
        { name: "Section 0", path: "https://www.google.com" },
        {
          name: "Section 0",
          path: "https://www.google.com",
        },
        {
          name: "Section 0",
          path: "https://www.google.com",
        },
      ],
    },
    {
      name: "Header 2",
      items: [
        {
          name: "Section 1",
          path: "https://www.google.com",
        },
        {
          name: "Section 2",
          path: "https://www.google.com",
        },
        {
          name: "Section 3",
          path: "https://www.google.com",
        },
        {
          name: "Section 4",
          path: "https://www.google.com",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Created by Taner Tasim
      <a
        href="https://www.google.com"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
      </a>
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/components/footer.js";

export default Footer;
