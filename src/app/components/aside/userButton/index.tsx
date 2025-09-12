"use client";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";

interface Props {
  toggle: boolean;
}
const UserBtn: FC<Props> = ({ toggle }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const router = useRouter();
  const handleSignOut = () => {
    router.push("/login");
    console.log("çıkış yapıldı");
  };

  return (
    <div className="flex flex-col gap-2 mt-auto">
      <div
        className="flex gap-3 items-center justify-center hover:bg-white/10 p-3 rounded-2xl cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="w-[36px] relative h-[36px] rounded-full overflow-hidden bg-green-50">
          {/* {auth.currentUser && (
            <Image
              src={`${auth.currentUser?.photoURL}`}
              fill
              alt=""
              sizes="200"
            />
          )} */}
        </div>
        <div className={`flex flex-col max-md:hidden ${toggle && "hidden"}`}>
          <p className="font-bold">name</p>
          <span className="text-[.7rem]">@Username</span>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`bg-theme-lavender text-white px-4 py-2  flex items-center justify-center text-center  gap-3 p-2 rounded-2xl min-w-[100px] max-md:min-w-auto ${
              toggle && "min-w-auto"
            }`}
          >
            <button className="flex gap-3 items-center" onClick={handleSignOut}>
              <span className={`max-md:text-xl ${toggle && "text-xl"}`}>
                <TbLogout />
              </span>
              <span className={`max-md:hidden ${toggle && "hidden"}`}>
                Logout
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserBtn;
