import React from "react";
import logo from "../images/logo-header.svg";

function Header() {
  return (
    <header className="header">
      <img alt="Логотип" className="header__logo" src={logo} />
    </header>
  );
}

export default Header;
