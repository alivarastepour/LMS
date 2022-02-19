import React from "react";
import axios from "axios";

type Tschool = {
  schoolId: string;
  schoolName: string;
  schoolAddress: string;
};

export const createSchoolHandler = (
  event: React.FormEvent<HTMLFormElement>,
  data: Tschool
) => {
  console.log(data);

  const URL = "http://localhost:8000/study/school/";
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(URL, data, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .catch((e) => {
      console.log(e);
    });
  event.preventDefault();
};
