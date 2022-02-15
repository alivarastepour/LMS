import { Wrapper } from "./AdminManagement.Header.styles";

const AdminManagementHeader = ({ state, setState }) => {
  return (
    <>
      <Wrapper>
        <button
          onClick={() => setState("req-sc")}
          className={`button ${state === "req-sc" ? "active" : "inactive"}`}
        >
          درخواست های ثبت مدرسه
        </button>
        <button
          onClick={() => setState("acc-sc")}
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
