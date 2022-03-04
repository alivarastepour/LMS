import axios from "axios";
import { host } from "../../Global/host";

type Tprofile = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  address: string;
  image: string;
};

export const profileEditHandler = (
  edit: boolean,
  setEdit: Function,
  state: Tprofile,
  setError: Function
) => {
  const URL = `${host}auth/whoami/`;
  const TOKEN = sessionStorage.getItem("token");

  if (edit) {
    axios
      .put(URL, state, {
        headers: { Authorization: `Token ${TOKEN}` },
      })
      .catch((e) =>
        setError(e.response.data.message || e.response.data.detail)
      );
  }
  setEdit(!edit);
};
