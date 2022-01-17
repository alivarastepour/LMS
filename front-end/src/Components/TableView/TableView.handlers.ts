import axios from "axios";
import { ChangeEvent } from "react";

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
  if (searchTerm === "نام کلاس") {
    newObj = obj.filter((a) => {
      return a.name.startsWith(value);
    });
  } else {
    newObj = obj.filter((a) => {
      return a.username.startsWith(value);
    });
  }
  setData(newObj);
};

export const userHandler = (
  user: any,
  type: string,
  status: string,
  setInformation: Function,
  setStaticInformation: Function
) => {
  const data = { operation: status };
  const TOKEN = sessionStorage.getItem("token");
  const URL = `http://localhost:8000/study/${type}-request/${parseInt(
    user.id
  )}/`;

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
  user: any,
  status: string
) => {
  setInformation((prev: any) => {
    return prev.map((item: any) => {
      if (item.id === user.id) {
        item.status = status;
      }
      return item;
    });
  });
  setStaticInformation((prev: any) => {
    return prev.map((item: any) => {
      if (item.id === user.id) {
        item.status = status;
      }
      return item;
    });
  });
};
