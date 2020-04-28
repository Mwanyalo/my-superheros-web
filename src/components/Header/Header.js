import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo2.png";

const Header = () => (
  <header className="toolbar">
    <div className="toolbar-logo">
      <img src={Logo} alt="my superheroes app" />
    </div>
    <NavLink to={"/"}>
      <FaSearch />
    </NavLink>
  </header>
);

export default Header;
