import { useState } from "react";
import AdminManagementHeader from "./AdminManagement.Header";
import { Wrapper } from "./AdminManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";
import SchoolRequest from "../AllSchools/AllSchools";

const AdminManagement = () => {
  const [state, setState] = useState("req-sc");
  return (
    <>
      <Wrapper>
        <AdminManagementHeader state={state} setState={setState} />
        <Content>
          {state === "req-sc" ? <SchoolRequest /> : <div></div>}
        </Content>
      </Wrapper>
    </>
  );
};

export default AdminManagement;
