import axios from "axios";

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
  state: Tprofile
) => {
  const URL = "http://localhost:8000/auth/whoami/";
  const TOKEN = sessionStorage.getItem("token");

  if (edit) {
    axios
      .put(URL, state, {
        headers: { Authorization: `Token ${TOKEN}` },
      })
      .catch((e) => console.log(e));
  }
  setEdit(!edit);
};
