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

  if (searchTerm === "نام مدرسه") {
    newData = data.filter((a: Tschhol) => a.name.includes(value));
  } else if (searchTerm === "شناسه مدرسه") {
    newData = data.filter((a: Tschhol) => a.school_id.includes(value));
  } else if (searchTerm === "نام مدیر") {
    newData = data.filter((a: Tschhol) => a.manager.includes(value));
  }
  setInformation(newData);
};
