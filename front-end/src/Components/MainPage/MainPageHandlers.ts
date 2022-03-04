import axios from "axios";
import { host } from "../../Global/host";

export const logoutHandler = () => {
  const URL = `${host}auth/logout/`;
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
