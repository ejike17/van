import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? activeStyle : null)}
      >
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="/about"
          className={({isActive}) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/host"
          className={({isActive}) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className={({isActive}) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
