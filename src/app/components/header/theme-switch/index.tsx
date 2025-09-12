"use client";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const [x, setX] = useState<boolean>(false);

  const handleSwitch = () => {
    setX(!x);
  };

  return (
    <button
      className="text-theme-lavender cursor-pointer text-3xl"
      onClick={handleSwitch}
    >
      {x ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitch;
