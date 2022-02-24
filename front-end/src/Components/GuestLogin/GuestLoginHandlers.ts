import axios from "axios";

export const guestJoin = (
  id: string,
  name: string,
  setLink: Function,
  setMessage: Function,
  setSuccess: Function,
  setOpen: Function
) => {
  if (name.trim() === "") {
    setSuccess(false);
    setOpen(true);
    setLink("");
    setMessage("لطفا نام خود را وارد کنید");
    return;
  }
  const URL = `http://localhost:8000/study/class/${id}/join/`;
  const DATA = { fullName: name };
  axios
    .post(URL, DATA, {})
    .then((a) => {
      setLink(a.data.join_link);
      setMessage(a.data.message);
      setSuccess(true);
      setOpen(true);
    })
    .catch(function (e) {
      console.log(e.response);
      setSuccess(false);
      setOpen(true);
    });
};
