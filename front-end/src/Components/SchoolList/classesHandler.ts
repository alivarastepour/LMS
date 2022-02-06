import axios from "axios";

export const joinHandler = () => {};
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
