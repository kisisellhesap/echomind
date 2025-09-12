"use client";
import CreatePost from "@/app/components/create-post";
import PostCard from "@/app/components/post-card";
import { AnimatePresence } from "motion/react";
import React, { FC } from "react";

const Whispers: FC = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <CreatePost />
        <div className="flex flex-col gap-3 ">
          <AnimatePresence mode="popLayout">
            <PostCard />;
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Whispers;
