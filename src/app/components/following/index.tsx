import React, { FC } from "react";

const Following: FC = () => {
  return (
    <div className="content-base-css min-w-[250px] max-lg:hidden sticky h-[94vh] top-5 right-0 flex flex-col gap-5">
      <h3 className="text-2xl">Who to Follow</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-[40px] h-[40px] rounded-full bg-green-50"></div>
          <div className="flex flex-col">
            <span>Name</span>
            <span className="">@username</span>
          </div>
          <button className="rounded-full py-1  px-3 bg-amber-50 text-black ml-auto hover:bg-theme-lavender hover:text-white">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Following;
