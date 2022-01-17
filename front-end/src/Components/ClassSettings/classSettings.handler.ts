import axios from "axios";

type Tclass = {
  name: string;
  welcome: string;
  meetingID?: string;
  record: boolean;
  autoStartRecording: boolean;
  allowStartStopRecording: boolean;
  webcamsOnlyForModerator: boolean;
  maxParticipants: number;
  duration: number;
  id?: number;
};

export const updateClassSettings = (value: Tclass): void => {
  const URL = `http://localhost:8000/study/class/${value.id}/`;
  const TOKEN = sessionStorage.getItem("token");
  delete value.id;
  delete value.meetingID;
  axios
    .put(URL, value, {
      headers: { Authorization: `Token ${TOKEN}` },
    })
    .catch((e) => console.log(e));
};
