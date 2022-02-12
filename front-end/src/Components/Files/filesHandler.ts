import axios from "axios";
import { ChangeEvent } from "react";

export const handleSelect = (
  e: ChangeEvent<HTMLInputElement>,
  u: string,
  setSelected: Function,
  setRemove: Function,
  remove: string[]
) => {
  if (e.target.checked) {
    setSelected((prev: string) => {
      return prev.concat(u);
    });
    if (remove.includes(u)) {
      setRemove((prev: string[]) => {
        return prev.filter((value: string) => value !== u);
      });
    }
  } else {
    setSelected((prev: string[]) => {
      return prev.filter((value: string) => value !== u);
    });
  }
};

export const handleRemove = (
  e: ChangeEvent<HTMLInputElement>,
  u: string,
  setSelected: Function,
  setRemove: Function,
  selected: string[]
) => {
  if (e.target.checked) {
    setRemove((prev: string) => {
      return prev.concat(u);
    });
    if (selected.includes(u)) {
      setSelected((prev: string[]) => {
        return prev.filter((value: string) => value !== u);
      });
    }
  } else {
    setRemove((prev: string[], id: string) => {
      return prev.filter((value: string) => value !== u);
    });
  }
};
export const deleteFile = (remove: string[], id: string) => {
  const URL = `http://localhost:8000/study/class/${id}/slide/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .delete(URL, {
      headers: { Authorization: `Token ${TOKEN}` },
      data: { urls: remove },
    })
    .then((a) => console.log(a));
};
export const selectFile = (selected: string[], id: string) => {};
export const fileHandler = (
  selected: string[],
  remove: string[],
  id: string
) => {
  deleteFile(remove, id);
  selectFile(selected, id);
};
