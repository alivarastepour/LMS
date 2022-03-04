import axios from "axios";

export const schoolProfileEditHandler = (
  edit: boolean,
  setEdit: Function,
  info: { schoolName: string; schoolAddress: string },
  url: string,
  setError: Function
) => {
  const TOKEN = sessionStorage.getItem("token");
  if (edit) {
    axios
      .put(url, info, {
        headers: { Authorization: `Token ${TOKEN}` },
      })
      .catch((e) =>
        setError(e.response.data.message || e.response.data.detail)
      );
  }
  setEdit(!edit);
};
