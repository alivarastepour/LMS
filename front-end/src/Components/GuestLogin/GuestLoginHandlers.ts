import axios from "axios";

export const guestJoin = (id: string, name: string) => {
  const URL = `http://localhost:8000/study/class/${id}/join/`;
  const DATA = { fullName: name };
  axios
    .post(URL, DATA, {})
    .then((a) => {
      console.log(a);
    })
    .catch(function (e) {
      console.log(e.response);
    });
};
