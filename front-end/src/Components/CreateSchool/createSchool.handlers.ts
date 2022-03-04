import React from "react";
import axios from "axios";
import { host } from "../../Global/host";

type Tschool = {
  schoolId: string;
  schoolName: string;
  schoolAddress: string;
};

export const createSchoolHandler = (
  event: React.FormEvent<HTMLFormElement>,
  data: Tschool,
  setError: Function
) => {
  const URL = `${host}study/school/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(URL, data, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .catch((e) => {
      setError(e.response.data.message || e.response.data.detail);
    });
  event.preventDefault();
};
