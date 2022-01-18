import React from "react";
import axios from "axios";

type Tschool = {
  schoolId: string;
  schoolName: string;
  schoolAddress: string;
};

export const createSchoolHandler = async (
  event: React.FormEvent<HTMLFormElement>,
  data: Tschool
) => {
  const URL = "http://localhost:8000/study/school";
  const TOKEN = sessionStorage.getItem("token");
  await axios
    .post(URL, data, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .catch((e) => {
      console.log(e);
    });
  event.preventDefault();
};
