import axios from "axios";

export const createMeeting = (
  id: string,
  setUrl: Function,
  setStarted: Function
) => {
  const URL = `http://localhost:8000/study/class/${id}/create/`;
  const TOKEN = sessionStorage.getItem("token");
  axios
    .post(
      URL,
      {},
      {
        headers: { Authorization: `Token ${TOKEN}` },
      }
    )
    .then((a) => {
      setStarted(a.data.success);
      setUrl(a.data.join_link);
    })
    .catch((e) => {
      setStarted(false);
    });
};
