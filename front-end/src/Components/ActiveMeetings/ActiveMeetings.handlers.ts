import axios from "axios";
import { host } from "../../Global/host";

export const joinAsAdmin = (
  id: string,
  setUrl: Function,
  setError: Function
) => {
  const URL = `${host}study/admin/meetings/${id}/join/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(
      URL,
      {},
      {
        headers: {
          Authorization: `Token ${TOKEN}`,
        },
      }
    )
    .then((a) => setUrl(a.data.join_link))
    .catch((e) => {
      setError(e.response.data.message || e.response.data.detail);
    });
};

export const forceEnd = (
  id: string,
  setEnded: Function,
  setError: Function
) => {
  const URL = `${host}study/admin/meetings/${id}/end/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .delete(URL, {
      headers: {
        Authorization: `Token ${TOKEN}`,
      },
    })
    .then((a) => setEnded(true))
    .catch((e) => {
      setError(e.response.data.message || e.response.data.detail);
      setEnded(false);
    });
};
