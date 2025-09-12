import Image from "next/image";
import React, { FC } from "react";

interface Props {
  toggle?: boolean;
}
const Logo: FC<Props> = ({ toggle }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={120}
        height={120}
        className="mb-5"
      />
      <div
        className={`flex flex-col items-center max-md:hidden ${
          toggle && "hidden"
        }`}
      >
        <h3 className="font-antic-didone text-theme-lavender font-bold text-4xl">
          ECHOMIND
        </h3>
        <span className="text-theme-white clear-start text-[1rem]">
          Think & Whisper
        </span>
      </div>
    </div>
  );
};

export default Logo;
