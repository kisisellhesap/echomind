"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const FormAuth: FC = () => {
  const params = usePathname();
  const isRegister = params === "/register";
  const router = useRouter();
  const handleLogin = () => {
    router.push("/whispers");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex w-[60%] mx-auto min-w-[340px] flex-col justify-center px-6 py-12 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className="sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <h2 className="text-center text-4xl font-bold tracking-tight text-white">
            {isRegister ? "Create your account" : "Sign in to your account"}
          </h2>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.25 }}
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-5"
        >
          <form className="space-y-6">
            {isRegister && (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-100"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 focus:outline-theme-lavender"
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-100"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="username"
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 focus:outline-theme-lavender"
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 focus:outline-theme-lavender"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-100"
                >
                  Password
                </label>
                {!isRegister && (
                  <a
                    href="#"
                    className="text-sm font-semibold text-theme-lavender hover:text-theme-lavender/90"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 focus:outline-theme-lavender"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="flex w-full justify-center rounded-md bg-theme-lavender px-3 py-1.5 text-sm font-semibold text-white hover:bg-theme-lavender/90"
            >
              {isRegister ? "Sign up" : "Sign in"}
            </motion.button>
          </form>

          {!isRegister && (
            <button
              className="justify-center bg-white p-1 rounded-md flex gap-2 text-black items-center text-sm hover:brightness-90"
              onClick={handleLogin}
            >
              <FcGoogle className="text-2xl" /> <span>Sign in with Google</span>
            </button>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center text-sm text-gray-400"
          >
            {isRegister ? "Already have an account?" : "Not a member?"}{" "}
            <Link
              href={isRegister ? "/login" : "/register"}
              className="font-semibold text-theme-lavender hover:text-theme-lavender/90"
            >
              {isRegister ? "Sign in" : "Start a sign up"}
            </Link>
          </motion.p>
          <Link
            href={"/whispers"}
            className="mx-auto p-2 bg-theme-lavender rounded-md text-sm"
          >
            Go Free
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FormAuth;
