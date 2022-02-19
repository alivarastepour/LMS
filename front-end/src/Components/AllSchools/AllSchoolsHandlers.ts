import axios from "axios";
import { ChangeEvent } from "react";
type Tschhol = {
  id: number;
  school_id: string;
  name: string;
  manager: string;
};
export const searchHandler = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  data: Tschhol[],
  setInformation: Function,
  searchTerm: string
) => {
  const value: string = e.target.value;

  if (value.trim() === "") {
    setInformation(data);
    return;
  }

  let newData;

  if (searchTerm === "name") {
    newData = data.filter((a: Tschhol) => a.name.includes(value));
  } else if (searchTerm === "school_id") {
    newData = data.filter((a: Tschhol) => a.school_id.includes(value));
  } else if (searchTerm === "manager") {
    newData = data.filter((a: Tschhol) => a.manager.includes(value));
  }
  setInformation(newData);
};

export const schoolAction = (action: string, id: string) => {
  const URL = `http://localhost:8000/study/admin/school/${id}/`;
  const TOKEN = sessionStorage.getItem("token");
  const DATA = { operation: action };
  axios
    .post(URL, DATA, {
      headers: {
        Authorization: `Token ${TOKEN}`,
      },
    })
    .catch((e) => console.log(e));
};
