import { colors, introduceText } from "@/app/constant/create-post";
import React, { FC } from "react";

interface Props {
  text: string;
}

const BgText: FC<Props> = ({ text }) => {
  return (
    <p
      style={{ opacity: text.trim().length / 800 }}
      className="text-center text-5xl fixed w-[300px]  top-[20%] left-[50%] ml-[-150px] -z-10 text-transparent"
    >
      {introduceText.split("").map((char, i) => {
        const colorIndex = Math.floor((i / text.trim().length) * colors.length);
        return (
          <span
            key={i}
            style={{
              color: colors[colorIndex],
            }}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
};

export default BgText;
