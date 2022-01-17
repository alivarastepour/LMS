import { Wrapper } from "./ClassSettings.styles";
import { Switch } from "@mui/material";
import { ClassSettingsReducer } from "./classSettings.reducer";
import { useReducer } from "react";
const ClassSettings = () => {
  const fakeData = {
    name: "کلاس اول گل‌ها",
    id: "salamp",
    msg: "به کلاس گلهای لاله خوش آمدید",
    maxAttendees: 32,
    duration: 100,
    rec: true,
    autoRec: true,
    pauseRec: true,
    msgAttendees: true,
    wcAttendees: true,
  };
  const [value, dispatch] = useReducer(ClassSettingsReducer, fakeData);
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
          value={value.name}
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
          placeholder={value.msg}
          value={value.msg}
        />

        <label className="label" htmlFor="">
          حداکثر تعداد شرکت‌کنندگان
        </label>
        <input
          id="max-attendees"
          className="input"
          type="number"
          placeholder={value.maxAttendees}
          onChange={(e) =>
            dispatch({
              type: "SET-CLASS-MAX-ATTENDEES",
              payload: e.target.value,
            })
          }
          value={value.maxAttendees}
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
          placeholder={value.duration}
          onChange={(e) =>
            dispatch({ type: "SET-CLASS-DURATION", payload: e.target.value })
          }
          value={value.duration}
        />
        <div>
          <label className="label switch" htmlFor="rec">
            قابلیت ضبط
          </label>

          <Switch
            checked={value.rec}
            onChange={(e) =>
              dispatch({ type: "SET-CLASS-RECORD", payload: e.target.checked })
            }
            id="rec"
          />
        </div>
        <div>
          <label className="label switch" htmlFor="auto-rec">
            شروع خودکار ضبط
          </label>

          <Switch
            checked={value.autoRec}
            onChange={(e) =>
              dispatch({
                type: "SET-CLASS-AUTO-RECORD",
                payload: e.target.checked,
              })
            }
            disabled={!value.rec}
            id="auto-rec"
          />
        </div>
        <div>
          <label className="label switch" htmlFor="pause-rec">
            توقف/ادامه ضبط
          </label>

          <Switch
            checked={value.pauseRec}
            disabled={!value.rec}
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
            checked={value.wcAttendees}
            id="wc"
          />
        </div>

        <button className="button acc">ذخیره</button>
        <button className="button rej">نمی‌خوام</button>
      </Wrapper>
    </>
  );
};

export default ClassSettings;
