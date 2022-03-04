import { useReducer, useState } from "react";

import { Wrapper } from "./CreateSchool.styles";

import { schoolReducer } from "./school.reducer";
import { createSchoolHandler } from "./createSchool.handlers.ts";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";

const CreateSchool = () => {
  const initialState = {
    school_id: "",
    name: "",
    address: "",
  };

  const [school, dispatch] = useReducer(schoolReducer, initialState);
  const [error, setError] = useState("");
  return (
    <>
      <Wrapper>
        <form
          onSubmit={(e) => {
            createSchoolHandler(e, school, setError);
          }}
        >
          <div className="label">شناسه مدرسه</div>
          <div className="flex-item">
            <input
              onChange={(e) =>
                dispatch({ type: "SET-SCHOOL-ID", payload: e.target.value })
              }
              spellCheck={false}
              autoFocus={true}
              className="input left"
              type="text"
            />
            <div className="exp">
              شناسه مدرسه باید متشکل از حروف انگلیسی اعداد و علائم نگارشی باشد.
            </div>
          </div>
          <div className="label">نام مدرسه</div>
          <div className="flex-item">
            <input
              onChange={(e) =>
                dispatch({ type: "SET-SCHOOL-NAME", payload: e.target.value })
              }
              spellCheck={false}
              className="input"
              type="text"
            />
          </div>
          <div className="label">آدرس</div>
          <div className="flex-item">
            <input
              onChange={(e) =>
                dispatch({
                  type: "SET-SCHOOL-ADDRESS",
                  payload: e.target.value,
                })
              }
              spellCheck={false}
              className="input address"
              type="text"
            />
          </div>
          <div className="flex-item">
            <button className="button" type="submit">
              ثبت درخواست
            </button>
          </div>
        </form>
        <div className="bound">
          <ErrorSnackbar msg={error} open={!!error} setOpen={setError} />
        </div>
      </Wrapper>
    </>
  );
};
export default CreateSchool;
