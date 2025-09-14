import React, { FC } from "react";
import Logo from "./logo";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between gap-10">
      <Logo />
    </header>
  );
};

export default Header;
