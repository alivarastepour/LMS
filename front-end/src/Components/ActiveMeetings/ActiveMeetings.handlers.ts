import axios from "axios";

export const joinAsAdmin = (id: string, setUrl: Function) => {
  const URL = `http://localhost:8000/study/admin/meetings/${id}/join/`;
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
    .then((a) => setUrl(a.data.join_link));
};

export const forceEnd = (id: string) => {
  const URL = `http://localhost:8000/study/admin/meetings/${id}/end/`;
  const TOKEN = sessionStorage.getItem("token");
  axios.delete(URL, {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });
};
