import axios from "axios";

export const joinHandler = (users: number[]) => {
  const URL = `http://localhost:8000/study/student-request/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(
      URL,
      { classes: users },
      {
        headers: { Authorization: `Token ${TOKEN}` },
      }
    )
    .catch((e) => console.log(e));
};
export const findSchool = (searchValue: string, setResult: Function) => {
  if (searchValue.trim() === "") {
    return;
  }
  const URL = `http://localhost:8000/study/school/${searchValue}/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .get(URL, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .then((res) => setResult(res.data))
    .catch((error) => console.log(error));
};
