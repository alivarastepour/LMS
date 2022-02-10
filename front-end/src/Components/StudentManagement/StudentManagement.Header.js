import { useNavigate } from "react-router-dom";
import { Wrapper } from "./StudentManagement.Header.styles";

const StudentManagementHeader = ({ state, setState }) => {
  const navigator = useNavigate();
  const nav = (url) => navigator(url);
  return (
    <>
      <Wrapper>
        <button
          onClick={() => {
            setState("info");
            nav("./studentManagement/info");
          }}
          className={`button ${state === "info" ? "active" : "inactive"}`}
        >
          کلاس‌های من
        </button>
        <button
          onClick={() => {
            setState("schoolClasses");
            nav("./studentManagement/schoolClasses");
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
export default StudentManagementHeader;
