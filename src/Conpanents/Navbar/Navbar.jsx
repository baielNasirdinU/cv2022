// import React from "react";
import "./navbar.scss";
import menuBurger from "../../img/menuBurger.svg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = function () {
    setMenuActive(!menuActive);
  };

  const menuItems = [
    {
      id: 1,
      menu: "home",
      link: "/home",
    },
    {
      id: 2,
      menu: "about",
      link: "/about",
    },
    {
      id: 3,
      menu: "blog",
      link: "/blog",
    },
    {
      id: 4,
      menu: "contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <Link to="/" className="navbar__logo logo">
            logoMy
          </Link>
          <button
            onClick={showMenu}
            className="navbar__toggle"
          >
            <img src={menuBurger} alt="" />
          </button>

          <ul
            className={
              menuActive
                ? "navbar__menu navbar__menu--show"
                : "navbar__menu"
            }
          >
            {menuItems.map((menuItem) => {
              return (
                <li key={menuItem.id}>
                  <NavLink
                    key={menuItem.id}
                    to={menuItem.link}
                    className="navbar__link"
                  >
                    {menuItem.menu}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
