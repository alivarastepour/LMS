import { Wrapper } from "./ClassSettings.styles";
import { Switch } from "@mui/material";
const ClassSettings = () => {
  return (
    <>
      <Wrapper>
        <label className="label" htmlFor="name">
          نام کلاس
        </label>
        <input id="name" className="input" type="text" placeholder="" />

        <label className="label" htmlFor="id">
          شناسه کلاس
        </label>
        <input id="id" className="input" type="text" placeholder="" />

        <label className="label" htmlFor="msg">
          پیام خوش‌آمد
        </label>
        <input id="msg" className="input" type="text" placeholder="" />

        <label className="label" htmlFor="">
          حداکثر تعداد شرکت‌کنندگان
        </label>
        <input
          id="max-attendees"
          className="input"
          type="number"
          placeholder=""
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
          placeholder=""
        />
        <div>
          <label className="label switch" htmlFor="rec">
            قابلیت ضبط
          </label>

          <Switch id="rec" />
        </div>
        <div>
          <label className="label switch" htmlFor="auto-rec">
            شروع خودکار ضبط
          </label>

          <Switch id="auto-rec" />
        </div>
        <div>
          <label className="label switch" htmlFor="pause-rec">
            توقف/ادامه ضبط
          </label>

          <Switch id="pause-rec" />
        </div>
        <div>
          <label className="label switch" htmlFor="pm">
            پیام شرکت کننده
          </label>

          <Switch id="pm" />
        </div>
        <div>
          <label className="label switch" htmlFor="wc">
            وب‌کم شرکت کننده
          </label>

          <Switch id="wc" />
        </div>

        <button className="button acc">ذخیره</button>
        <button className="button rej">نمی‌خوام</button>
      </Wrapper>
    </>
  );
};

export default ClassSettings;
