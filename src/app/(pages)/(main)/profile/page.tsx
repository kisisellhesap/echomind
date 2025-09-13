import React, { FC } from "react";
import { IoSettings } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa6";
import Link from "next/link";
import Likes from "./likes";
import Comments from "./comments";
import Whispers from "./whispers";

const Profile: FC = ({ searchParams }: any) => {
  const { tab } = searchParams;
  console.log(tab);

  const content =
    tab === "whispers" ? (
      <Whispers />
    ) : tab === "likes" ? (
      <Likes />
    ) : (
      <Comments />
    );
  const active =
    tab === "whispers"
      ? "translate-x-0"
      : tab === "likes"
      ? "translate-x-full"
      : "translate-x-[200%]";
  return (
    <div className="relative flex flex-col gap-3 ">
      <div className="flex flex-col gap-9 content-base-css ">
        <div className="flex gap-5  items-center ">
          <div className="w-[100px] h-[100px] rounded-full bg-green-50"></div>
          <div className={`flex flex-col max-md:hidden`}>
            <p className="font-bold text-2xl">Name</p>
            <span className="text-[1rem]">@Username</span>
          </div>

          <button className="ml-auto text-3xl ">
            <IoSettings />
          </button>
        </div>

        <div className="text-sm flex flex-col  gap-5">
          <div className="flex gap-3 items-center">
            <FaCalendarCheck />
            <span>Joined October 2021</span>
          </div>

          <div className="flex gap-3">
            <span className="flex gap-2">
              <span>20</span> Followers
            </span>
            <span className="flex gap-2">
              <span>3</span> Following
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex border-t z-0 text-md sticky top-0   bg-transparent border-b backdrop-blur-sm rounded-lg text-sm overflow-hidden mb-3">
          <Link
            href="/profile?tab=whispers"
            className="flex-1 flex items-center justify-center  text-center p-2"
          >
            Whispers
          </Link>
          <Link
            href="/profile?tab=likes
"
            className="flex-1 flex items-center justify-center  text-center p-2 "
          >
            Like
          </Link>
          <Link
            href="/profile?tab=comments"
            className="flex-1 flex items-center justify-center text-center p-2"
          >
            Comment
          </Link>
          <div
            className={`bg-theme-lavender/80 max-w-[217px] w-[33.3%] h-full -z-10 absolute ${active} transition-all p-2`}
          ></div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Profile;
