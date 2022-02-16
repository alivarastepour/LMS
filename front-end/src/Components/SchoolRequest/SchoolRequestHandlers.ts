import { ChangeEvent } from "react";

export const searchHandler = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  data: any,
  setInformation: Function,
  searchTerm: string
) => {
  const value = e.target.value;
  if (value.trim() === "") {
    return;
  }
  let newData;
  if (searchTerm === "نام مدرسه") {
  } else if (searchTerm === "شناسه مدرسه") {
  } else if (searchTerm === "نام مدیر") {
  }
};
