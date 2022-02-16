import axios from "axios";
import React from "react";

export const profileImageEditHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  dispatch: Function,
  url: string
) => {
  const TOKEN = sessionStorage.getItem("token");
  // @ts-ignore
  const temp = URL.createObjectURL(event.target.files[0]);
  // @ts-ignore
  const file = event.target.files[0];
  let formData = new FormData();
  formData.append("image", file, file.name);
  axios
    .put(url, formData, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Token ${TOKEN}`,
      },
    })
    .then((res) => {
      dispatch({ type: "SET-PHOTO", payload: temp });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const setParam = (param: string): string => {
  switch (param) {
    case "manager":
      return "management";
    case "student":
      return "studentManagement";
    case "teacher":
      return "teachermanagement";
    default:
      return "admin";
  }
};
