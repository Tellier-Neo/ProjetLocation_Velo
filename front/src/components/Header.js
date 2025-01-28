import React from "react";
import Logo from "./Logo";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="header-content">
        <h1>Location de Vélo</h1>
      </div>
    </header>
  );
};

export default Header;
