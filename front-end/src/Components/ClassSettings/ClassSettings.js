import { useEffect, useReducer } from "react";

import { Wrapper } from "./ClassSettings.styles";

import { Switch } from "@mui/material";

import { ClassSettingsReducer } from "./classSettings.reducer";

import useGet from "../../custom-hooks/useGet";
import { updateClassSettings } from "./classSettings.handler";

const ClassSettings = ({ class_id, setOpenSettings }) => {
  const fakeData = {
    name: " ",
    id: " ",
    meetingID: " ",
    welcome: " ",
    maxParticipants: 0,
    duration: 0,
    record: false,
    autoStartRecording: false,
    allowStartStopRecording: false,
    webcamsOnlyForModerator: false,
  };

  const URL = `http://localhost:8000/study/class/${class_id}/`;
  const TOKEN = sessionStorage.getItem("token");

  const { data } = useGet(URL, TOKEN);

  const [value, dispatch] = useReducer(ClassSettingsReducer, fakeData);

  useEffect(() => {
    dispatch({ type: "SET-CLASS-NAME", payload: data.name });
    dispatch({ type: "SET-CLASS-WELCOME-MSG", payload: data.welcome });
    dispatch({
      type: "SET-CLASS-MAX-ATTENDEES",
      payload: data.maxParticipants,
    });
    dispatch({ type: "SET-CLASS-DURATION", payload: data.duration });
    dispatch({ type: "SET-CLASS-RECORD", payload: data.record });
    dispatch({
      type: "SET-CLASS-AUTO-RECORD",
      payload: data.autoStartRecording,
    });
    dispatch({
      type: "SET-CLASS-PAUSE-RECORD",
      payload: data.allowStartStopRecording,
    });
    dispatch({
      type: "SET-CLASS-WC-ATTENDEES",
      payload: data.webcamsOnlyForModerator,
    });
    dispatch({ type: "SET-MEETING-ID", payload: data.meetingID });
    dispatch({ type: "SET-ID", payload: data.id });
  }, [data]);

  return (
    <>
      <Wrapper>
        <label className="label" htmlFor="name">
          نام کلاس
        </label>
        <input
          id="name"
          className="input"
          type="text"
          placeholder={value.name}
          onChange={(e) =>
            dispatch({ type: "SET-CLASS-NAME", payload: e.target.value })
          }
        />

        <label className="label" htmlFor="msg">
          پیام خوش‌آمد
        </label>
        <input
          id="msg"
          className="input"
          type="text"
          onChange={(e) =>
            dispatch({ type: "SET-CLASS-WELCOME-MSG", payload: e.target.value })
          }
          placeholder={value.welcome}
        />

        <label className="label" htmlFor="">
          حداکثر تعداد شرکت‌کنندگان
        </label>
        <input
          id="max-attendees"
          className="input"
          type="number"
          onChange={(e) =>
            dispatch({
              type: "SET-CLASS-MAX-ATTENDEES",
              payload: e.target.value,
            })
          }
          placeholder={value.maxParticipants}
        />

        <label className="label" htmlFor="duration">
          مدت زمان
        </label>
        <input
          id="duration"
          className="input"
          type="number"
          min={1}
          max={120}
          onChange={(e) =>
            dispatch({ type: "SET-CLASS-DURATION", payload: e.target.value })
          }
          placeholder={value.duration}
        />
        <div>
          <label className="label switch" htmlFor="rec">
            قابلیت ضبط
          </label>

          <Switch
            checked={!!value.record}
            onChange={(e) => {
              dispatch({ type: "SET-CLASS-RECORD", payload: e.target.checked });
            }}
            id="rec"
          />
        </div>
        <div>
          <label className="label switch" htmlFor="auto-rec">
            شروع خودکار ضبط
          </label>

          <Switch
            checked={!!value.autoStartRecording}
            disabled={!value.record}
            onChange={(e) =>
              dispatch({
                type: "SET-CLASS-AUTO-RECORD",
                payload: e.target.checked,
              })
            }
            id="auto-rec"
          />
        </div>
        <div>
          <label className="label switch" htmlFor="pause-rec">
            توقف/ادامه ضبط
          </label>

          <Switch
            checked={!!value.allowStartStopRecording}
            disabled={!value.record}
            id="pause-rec"
            onChange={(e) =>
              dispatch({
                type: "SET-CLASS-PAUSE-RECORD",
                payload: e.target.checked,
              })
            }
          />
        </div>
        <div>
          <label className="label switch" htmlFor="wc">
            وب‌کم شرکت کننده
          </label>

          <Switch
            onChange={(e) =>
              dispatch({
                type: "SET-CLASS-WC-ATTENDEES",
                payload: e.target.checked,
              })
            }
            checked={!!value.webcamsOnlyForModerator}
            id="wc"
          />
        </div>

        <button
          onClick={() => {
            updateClassSettings(value);
            setOpenSettings(false);
          }}
          className="button acc"
        >
          ذخیره
        </button>
        <button onClick={() => setOpenSettings(false)} className="button rej">
          نمی‌خوام
        </button>
      </Wrapper>
    </>
  );
};

export default ClassSettings;
