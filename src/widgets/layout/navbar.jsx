import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="black"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="#FFFFFF" className="p-0">
      <div className="container items-center justify-between flex p-1 mx-10">
        <Link to="/">
          <img src="/img/LogoBrunettePrimario.png" alt="logo" className="object-scale-down h-12"/>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
