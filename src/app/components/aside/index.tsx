"use client";
import React, { FC, useState } from "react";
import Logo from "../header/logo";
import Nav from "../header/nav";
import { HiMenu } from "react-icons/hi";

const Aside: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      className={` content-base-css z-10 sticky h-[94vh] flex flex-col gap-10 top-5 left-0 p-3 max-md:w-[75px] ${
        toggle ? "w-[75px]" : "w-[250px]"
      } `}
    >
      <button
        className=" max-md:hidden text-3xl mx-auto"
        onClick={() => setToggle(!toggle)}
      >
        <HiMenu />
      </button>
      <Logo toggle={toggle} />
      <Nav toggle={toggle} />
    </div>
  );
};

export default Aside;
