import { useState } from "react";
import AdminManagementHeader from "./AdminManagement.Header";
import { Wrapper } from "./AdminManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";

const AdminManagement = () => {
  const [state, setState] = useState("req-sc");
  return (
    <>
      <Wrapper>
        <AdminManagementHeader state={state} setState={setState} />
        <Content></Content>
      </Wrapper>
    </>
  );
};

export default AdminManagement;
