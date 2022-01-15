import React from "react";
import axios from "axios";

export const createSchoolHandler = async (
  event: React.FormEvent<HTMLFormElement>,
  data: { schoolId: string; schoolName: string; schoolAddress: string }
) => {
  const TOKEN = sessionStorage.getItem("token");

  await axios
    .post("http://localhost:8000/study/school", data, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  event.preventDefault();
};
