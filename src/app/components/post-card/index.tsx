"use client";
import React, { FC } from "react";
import { TfiComment } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { motion } from "framer-motion";

const PostCard: FC<any> = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex gap-3 bg-white/10 backdrop-blur-sm w-[100%] rounded-lg p-4"
    >
      <div className="w-[40px] h-[40px] rounded-full relative overflow-hidden bg-white shrink-0">
        {/* <Image src={`${whisper.author.photo}`} fill alt="" /> */}
      </div>

      <div className="flex flex-col gap-3 overflow-hidden flex-1 ">
        <div className=" flex  flex-col gap-3">
          <div className="flex gap-2 items-center justify-between font-fira-sans">
            <p className="font-bold text-md">name</p>
            <span className="text-[.7rem]">@username</span>
            <span className="text-[.7rem]">4 hour</span>

            <div className="ml-auto text-sm">
              {" "}
              <p>takip et</p>
            </div>
          </div>
          <p className="text-sm text-white break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            assumenda.
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center ">
          <button className="flex gap-1 items-center text-sm">
            <TfiComment />
            <span>2</span>
          </button>
          <button className="flex gap-1 items-center text-sm">
            <GoHeart />
            <span>10</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
