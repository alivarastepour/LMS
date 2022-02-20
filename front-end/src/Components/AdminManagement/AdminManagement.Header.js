import { Wrapper } from "./AdminManagement.Header.styles";
import { useNavigate } from "react-router-dom";
const AdminManagementHeader = ({ state, setState }) => {
  const navigator = useNavigate();
  const nav = (url) => navigator(url);
  return (
    <>
      <Wrapper>
        <button
          onClick={() => {
            nav("./admin/info");
            setState("req-sc");
          }}
          className={`button ${state === "req-sc" ? "active" : "inactive"}`}
        >
          مدارس
        </button>
        <button
          onClick={() => {
            nav("./admin/info");
            setState("ac-se");
          }}
          className={`button ${state === "ac-se" ? "active" : "inactive"}`}
        >
          جلسات فعال
        </button>
        <button className="button inactive">
          <a href="http://localhost:8000/admin" rel="noreferrer" target="blank">
            پنل ادمین
          </a>
        </button>
      </Wrapper>
    </>
  );
};

export default AdminManagementHeader;
