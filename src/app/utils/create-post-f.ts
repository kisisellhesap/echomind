import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Create Post Type

export const handleTypeChange = (
  e: ChangeEvent<HTMLSelectElement>,
  text: string,
  type: string,
  setType: Dispatch<SetStateAction<string>>,
  setText: Dispatch<SetStateAction<string>>
) => {
  const newType = e.target.value;

  const userText = text.startsWith(type + " ")
    ? text.slice((type + " ").length)
    : text.trim();

  console.log(userText, "userText");

  localStorage.setItem("type", newType);

  setType(newType);
  setText(newType + " " + userText);
};

// Create Post Categories

export const handleCategoriesChange = (
  e: ChangeEvent<HTMLSelectElement>,
  setCategories: Dispatch<SetStateAction<string>>
) => {
  const newCategories = e.target.value;

  localStorage.setItem("categories", newCategories);

  setCategories(newCategories);
};

// Create Post Text

export const handleTextChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  type: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const inputValue = e.target.value;

  if (!inputValue.startsWith(type + " ")) {
    setText(type + " ");
  } else {
    setText(inputValue);
  }
};

// Create Post Confirm

// export const handleConfirm = (
//   text: string,
//   type: string,
//   setText: Dispatch<SetStateAction<string>>
// ) => {
//   if (text.trim().length > (type + " ").length) {
//     alert("Posted: " + text.trim());
//     alert("Type: " + type);

//     setText(type + " ");
//   }
// };
