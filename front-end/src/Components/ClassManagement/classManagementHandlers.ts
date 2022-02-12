import axios from "axios";
import { ChangeEvent } from "react";

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

export const fileUpload = (
  event: ChangeEvent<HTMLInputElement>,
  id: string
) => {
  const URL = `http://localhost:8000/study/class/${id}/slide/`;
  const TOKEN = sessionStorage.getItem("token");

  let formData = new FormData();
  const fileList: FileList | null = event.target.files;
  let length = fileList?.length;

  if (!length) {
    length = 0;
  }
  if (fileList) {
    for (let index = 0; index < length; index++) {
      formData.append(
        fileList[index].type.split("/")[0],
        fileList[index],
        fileList[index].name
      );
    }
    axios
      .put(URL, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Token ${TOKEN}`,
        },
      })
      .catch((e) => console.log(e));
  }
};
