import { useNavigate } from "react-router-dom";

import { Wrapper } from "./AdminManagement.Header.styles";
const AdminManagementHeader = ({ state, setState }) => {
  const navigator = useNavigate();
  const nav = (url) => navigator(url);
  return (
    <>
      <Wrapper>
        <button
          onClick={() => {
            nav("./admin/info");
            setState("info");
          }}
          className={`button ${state === "info" ? "active" : "inactive"}`}
        >
          مدارس
        </button>
        <button
          onClick={() => {
            nav("./admin/meetings");
            setState("meetings");
          }}
          className={`button ${state === "meetings" ? "active" : "inactive"}`}
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
