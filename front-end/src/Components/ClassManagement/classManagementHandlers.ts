import axios from "axios";
import { ChangeEvent } from "react";
import { host } from "../../Global/host";

export const createMeeting = (
  id: string,
  setUrl: Function,
  setError: Function,
  setOpenSnackBar: Function
) => {
  const URL = `${host}study/class/${id}/create/`;
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
      setUrl(a.data.join_link);
      console.log(a);
    })
    .catch(function (error) {
      setError(error.response.data.message);
      setOpenSnackBar(true);
    });
};

export const fileUpload = (
  event: ChangeEvent<HTMLInputElement>,
  id: string
) => {
  const URL = `${host}study/class/${id}/slide/`;
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
