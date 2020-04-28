import React from "react";
import "./Header.scss";

const Header = (props) => (
  <header className="Toolbar">
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <div className="toolbar-logo">
      <a href="/home">
        {/* <img src={logo} className="logoImage" alt="shujaaz" /> */}
      </a>
    </div>
    <nav className="DesktopOnly">{/* <NavigationItems /> */}</nav>
  </header>
);

export default Header;
