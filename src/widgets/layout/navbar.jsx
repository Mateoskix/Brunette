import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export function Navbar({ brandName, routes, action, onCartClick}) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleCartClick = () => {
    onCartClick();
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-white">
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
              className="flex items-center gap-1 p-1 font-bunya text-lg"
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
              className="flex items-center gap-1 p-1 font-bunya hover:font-bunya-bold hover:text-custom-primary text-lg"
            >
              {name}
            </Link>
          )}
        </Typography>
      ))}
      <button type="button" onClick={handleCartClick}>
      {React.createElement(ShoppingCartIcon, {className: "w-[18px] h-[18px] opacity-75 mr-1 text-black hover:text-custom-primary hover:cursor-pointer active:text-custom-primary"})}
      </button>
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-0">
      <div className="container items-center justify-between flex">
        <Link to="/">
          <img src="/img/LogoBrunettePrimario.png" alt="logo" className="object-scale-down h-12 translate-y-[15%]"/>
        </Link>
        <div className="hidden lg:block lg:translate-y-[35%]">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-black hover:bg-custom-primary focus:bg-transparent active:bg-custom-primary lg:hidden"
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
  onCartClick: PropTypes.func.isRequired,
};


Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
