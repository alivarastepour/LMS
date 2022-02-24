import axios from "axios";
import { ChangeEvent } from "react";

type Tuser = {
  class_name: string;
  id: number;
  name: string;
  photo: string;
  status: string;
  username: string;
};

export const handleSearch = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  obj: { name: string; username: string }[],
  setData: Function,
  searchTerm: string
): void => {
  const value: string = e.target.value;

  if (value.trim() === "") {
    setData(obj);
    return;
  }
  let newObj;
  if (searchTerm === "name") {
    newObj = obj.filter((a) => {
      return a.name.includes(value);
    });
  } else {
    newObj = obj.filter((a) => {
      return a.username.includes(value);
    });
  }
  setData(newObj);
};

export const userHandler = (
  user: Tuser,
  type: string,
  status: string,
  setInformation: Function,
  setStaticInformation: Function
): void => {
  const data = { operation: status };
  const TOKEN = sessionStorage.getItem("token");
  const URL = `http://localhost:8000/study/${type}-request/${user.id}/`;

  axios
    .post(URL, data, {
      headers: {
        Authorization: `Token ${TOKEN}`,
      },
    })
    .then(() =>
      handleTableChange(setInformation, setStaticInformation, user, status)
    )
    .catch((e) => console.log(e));
};

const handleTableChange = (
  setInformation: Function,
  setStaticInformation: Function,
  user: Tuser,
  status: string
): void => {
  setInformation((prev: Tuser[]) => {
    return prev.map((item: Tuser) => {
      if (item.id === user.id) {
        item.status = status;
      }
      return item;
    });
  });
  setStaticInformation((prev: Tuser[]) => {
    return prev.map((item: Tuser) => {
      if (item.id === user.id) {
        item.status = status;
      }
      return item;
    });
  });
};
