import { Wrapper } from "./SchoolProfile.styles";
import Field from "../Field/Field";
import photo from "../../Assets/profile-placeholder.jpg";
import { useEffect, useReducer, useState } from "react";
import { schoolProfileReducer } from "./schoolProfile.reducer";

import useGet from "../../custom-hooks/useGet";

import { profileImageEditHandler } from "../../Global/global-functions";
import { schoolProfileEditHandler } from "./schoolProfile-edit.handler";

const SchoolProfile = () => {
  const URL = "http://localhost:8000/study/school/";
  const TOKEN = sessionStorage.getItem("token");

  const { data } = useGet(URL, TOKEN);

  const [edit, setEdit] = useState(false);

  const [info, dispatch] = useReducer(schoolProfileReducer, {});

  useEffect(() => {
    dispatch({ type: "SET-SCHOOL-ADDRESS", payload: data.address });
    dispatch({ type: "SET-SCHOOL-ID", payload: data.school_id });
    dispatch({ type: "SET-SCHOOL-NAME", payload: data.name });
    dispatch({ type: "SET-PHOTO", payload: data.image });
  }, [data]);
  console.log(info);

  return (
    <>
      <Wrapper>
        <div className="flex-item image">
          <img src={(info && info.image) || photo} alt="img not found" />
          <button className="button">
            <label htmlFor="photo">تغییر عکس مدرسه</label>
            <input
              onChange={(e) => profileImageEditHandler(e, dispatch, URL)}
              id="photo"
              accept="image/*"
              type="file"
            />
          </button>
        </div>
        <div className="flex-item content">
          <div className="label">شناسه مدرسه</div>
          <Field
            edit={edit}
            content={info && info.school_id}
            editable={false}
          />
        </div>
        <div className="flex-item content">
          <div className="label">نام مدرسه</div>
          <Field
            edit={edit}
            content={info && info.name}
            editable={true}
            onChange={{ change: dispatch, type: "SET-SCHOOL-NAME" }}
          />
        </div>
        <div className="flex-item content">
          <div className="label">آدرس مدرسه</div>
          <Field
            edit={edit}
            content={info && info.address}
            editable={true}
            onChange={{ change: dispatch, type: "SET-SCHOOL-ADDRESS" }}
          />
        </div>
        <div className="flex-item content change">
          <button
            onClick={() => {
              schoolProfileEditHandler(edit, setEdit, info, URL);
            }}
            className="button"
          >
            {edit ? "ثبت تغییرات" : "تغییر اطلاعات"}
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default SchoolProfile;
