"use client";
import React, { FC, FormEvent, useEffect, useState } from "react";

import { selectCategoryItem, selectTypeItem } from "@/app/constant/create-post";
import {} from "@/app/utils/create-post-f";
import BgText from "./bg-text";
import CrPostHeader from "./cr-post-header";
import Form from "./form";

const CreatePost: FC = () => {
  const [type, setType] = useState<string>(selectTypeItem[0].value);
  const [categories, setCategories] = useState<string>(
    selectCategoryItem[0].value
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  const [text, setText] = useState<string>(type + " ");

  useEffect(() => {
    const savedType = localStorage.getItem("type");
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(savedCategories);
    }
    if (savedType) {
      setType(savedType);
      setText(savedType + " ");
    }
    setLoading(true);
  }, []);

  const handleCreateWhisper = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length > (type + " ").length) {
      setText(type + " ");
    }
  };

  return (
    <div className="relative content-base-css">
      <div className=" flex flex-col gap-5  rounded-lg ">
        <CrPostHeader hidden={hidden} setHidden={setHidden} />
        <BgText text={text} />

        <Form
          handleCreateWhisper={handleCreateWhisper}
          categories={categories}
          text={text}
          type={type}
          loading={loading}
          hidden={hidden}
          setCategories={setCategories}
          setType={setType}
          setText={setText}
        />
      </div>
    </div>
  );
};

export default CreatePost;
