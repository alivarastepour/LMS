import { useNavigate } from "react-router-dom";

import { Wrapper } from "./SchoolInformation.Header.styles";

const SchoolInformationHeader = ({ state, setState }) => {
  const navigator = useNavigate();
  const nav = (url) => navigator(url);
  return (
    <>
      <Wrapper>
        <button
          onClick={() => {
            setState("info");
            nav("./management/info");
          }}
          className={`button ${state === "info" ? "active" : "inactive"}`}
        >
          اطلاعات مدرسه
        </button>
        <button
          onClick={() => {
            setState("teachers");
            nav("./management/teachers");
          }}
          className={`button margin ${
            state === "teachers" ? "active" : "inactive"
          }`}
        >
          معلمان
        </button>
        <button
          onClick={() => {
            setState("students");
            nav("./management/students");
          }}
          className={`button margin ${
            state === "students" ? "active" : "inactive"
          }`}
        >
          دانش‌آموزان
        </button>
        <button
          onClick={() => {
            setState("classes");
            nav("./management/classes");
          }}
          className={`button margin ${
            state === "classes" ? "active" : "inactive"
          }`}
        >
          کلاس‌ها
        </button>
      </Wrapper>
    </>
  );
};
export default SchoolInformationHeader;
