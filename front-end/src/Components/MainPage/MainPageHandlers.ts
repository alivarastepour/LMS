import axios from "axios";

export const logoutHandler = () => {
  const URL = "http://localhost:8000/auth/logout/";
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(
      URL,
      {},
      {
        headers: { Authorization: `Token ${TOKEN}` },
      }
    )
    .catch((e) => console.log(e.response));
};
