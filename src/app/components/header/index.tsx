import React, { FC } from "react";
import Logo from "./logo";
import ThemeSwitch from "./theme-switch";
import Nav from "./nav";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between gap-10">
      <Logo />
      {/* 
      <Nav />
      <ThemeSwitch /> */}
    </header>
  );
};

export default Header;
