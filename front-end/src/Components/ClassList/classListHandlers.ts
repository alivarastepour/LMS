import axios from "axios";
import { ChangeEvent } from "react";

export const handleSearch = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  obj: { name: string; teacher: string }[],
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
      return a.teacher.includes(value);
    });
  }
  setData(newObj);
};

export const addClass = (
  name: string,
  setInfo: Function,
  setStaticInfo: Function
) => {
  if (name.trim() === "") {
    return;
  }
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(
      "http://localhost:8000/study/class/",
      { name: name },
      {
        headers: { Authorization: `Token ${TOKEN}` },
      }
    )
    .then((res) => handleAddClass(res.data, setInfo, setStaticInfo))
    .catch((e) => console.log(e));
};

const handleAddClass = (
  data: any,
  setInfo: Function,
  setStaticInfo: Function
) => {
  setInfo((prev: any) => {
    const newList = prev.concat({
      name: data.name,
      teacher: data.teacher,
      id: data.id,
    });
    return newList;
  });

  setStaticInfo((prev: any) => {
    const newList = prev.concat({
      name: data.name,
      teacher: data.teacher,
      id: data.id,
    });
    return newList;
  });
};

export const deleteClass = (
  id: string,
  setInfo: Function,
  setStaticInfo: Function
): void => {
  const URL = `http://localhost:8000/study/class/${id}`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .delete(URL, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .then(() => handleDeleteClass(id, setInfo, setStaticInfo));
};

const handleDeleteClass = (
  id: string,
  setInfo: Function,
  setStaticInfo: Function
) => {
  setInfo((prev: any) => {
    return prev.filter((clazz: any) => clazz.id !== id);
  });
  setStaticInfo((prev: any) => {
    return prev.filter((clazz: any) => clazz.id !== id);
  });
};
