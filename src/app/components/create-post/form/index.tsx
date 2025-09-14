"use client";
import { selectCategoryItem, selectTypeItem } from "@/app/constant/create-post";
import {
  handleCategoriesChange,
  handleTextChange,
  handleTypeChange,
} from "@/app/utils/create-post-f";
import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  handleCreateWhisper: (e: FormEvent<HTMLFormElement>) => void;
  categories: string;
  text: string;
  type: string;
  loading: boolean;
  hidden: boolean;
  setCategories: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
}

const Form: FC<Props> = ({
  handleCreateWhisper,
  categories,
  text,
  type,
  loading,
  hidden,
  setCategories,
  setType,
  setText,
}) => {
  return (
    <AnimatePresence>
      {hidden && (
        <motion.form
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="flex flex-col gap-3"
          onSubmit={handleCreateWhisper}
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 flex flex-col gap-1 min-w-[150px]">
              <label className="text-sm">Categories</label>
              <select
                value={categories}
                onChange={(e) => handleCategoriesChange(e, setCategories)}
                className="border text-sm rounded-md outline-none p-1 w-full"
              >
                {selectCategoryItem.map((item, i) => (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {loading ? (
              <div className="flex flex-col gap-1">
                <label className="text-sm">Feel</label>
                <select
                  value={type}
                  onChange={(e) =>
                    handleTypeChange(e, text, type, setType, setText)
                  }
                  className="border rounded-md text-sm outline-none p-1 "
                >
                  {selectTypeItem.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="border flex items-center justify-center rounded-md outline-none w-[100px] h-[36px] mb-5 p-1 ml-auto">
                <div className="loader"></div>
              </div>
            )}
          </div>

          <textarea
            disabled={!loading}
            value={loading ? text : ""}
            onChange={(e) => handleTextChange(e, type, setText)}
            className="p-3 rounded-md resize-none outline-none disabled:opacity-50 disabled:cursor-not-allowed whitespace-pre-wrap break-all h-auto min-h-[110px] text-sm"
            maxLength={177}
          />

          <span className="text-[.7rem] px-2 py-1 bg-theme-lavender rounded-full w-fit">
            {categories}
          </span>

          <progress
            id="file"
            value={Math.min(text.trim().length, 177)}
            max={177}
            className="h-[6px] w-full rounded-md overflow-hidden"
          ></progress>

          <button
            type="submit"
            className="bg-theme-lavender rounded-md text-md font-antic-didone"
          >
            whisper
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default Form;
