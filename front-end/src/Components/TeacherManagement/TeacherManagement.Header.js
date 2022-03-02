import { useNavigate } from "react-router-dom";

import { Wrapper } from "./TeacherManagement.Header.styles";

const TeacherManagementHeader = ({ state, setState }) => {
  const navigator = useNavigate();

  const nav = (url) => navigator(url);

  return (
    <>
      <Wrapper>
        <button
          onClick={() => {
            setState("info");
            nav("./teacherManagement/info");
          }}
          className={`button ${state === "info" ? "active" : "inactive"}`}
        >
          کلاس‌های من
        </button>
        <button
          onClick={() => {
            setState("schoolClasses");
            nav("./teacherManagement/schoolClasses");
          }}
          className={`button margin ${
            state === "schoolClasses" ? "active" : "inactive"
          }`}
        >
          مدارس
        </button>
      </Wrapper>
    </>
  );
};
export default TeacherManagementHeader;
