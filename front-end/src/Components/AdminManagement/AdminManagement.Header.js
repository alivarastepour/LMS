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
          درخواست های ثبت مدرسه
        </button>
        <button
          onClick={() => {
            nav("./admin/schools");
            setState("acc-sc");
          }}
          className={`button margin ${
            state === "acc-sc" ? "active" : "inactive"
          }`}
        >
          مدارس ثبت شده
        </button>
      </Wrapper>
    </>
  );
};

export default AdminManagementHeader;