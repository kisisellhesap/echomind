import { colors, introduceText } from "@/app/constant/create-post";
import React from "react";
import Logo from "../../header/logo";

const Banner = () => {
  const colorArr = colors.join(", ");

  return (
    <div className="flex-1  backdrop-blur-sm grid place-items-center p-4">
      <div className="flex flex-col gap-3 w-[60%]">
        <Logo />
        <p
          className="text-center text-xl leading-tight font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${colorArr})`,
          }}
        >
          {introduceText}
        </p>
      </div>
    </div>
  );
};

export default Banner;
