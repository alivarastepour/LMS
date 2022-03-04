import axios from "axios";
import { host } from "../../Global/host";

export const joinHandler = (users: number[], content: string) => {
  const URL = `${host}study/${content}-request/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(
      URL,
      { classes: users },
      {
        headers: { Authorization: `Token ${TOKEN}` },
      }
    )
    .catch((error) => console.log(error));
};
export const findSchool = (
  searchValue: string,
  setResult: Function,
  setError: Function
) => {
  if (searchValue.trim() === "") {
    return;
  }
  const URL = `${host}study/school/${searchValue}/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .get(URL, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .then((res) => setResult(res.data))
    .catch((error) =>
      setError(error.response.data.message || error.response.data.detail)
    );
};
