import { useState } from "react";
import AdminManagementHeader from "./AdminManagement.Header";
import { Wrapper } from "./AdminManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";
import SchoolRequest from "../AllSchools/AllSchools";
import ActiveMeetings from "../ActiveMeetings/ActiveMeetings";

const AdminManagement = () => {
  const [state, setState] = useState("req-sc");
  return (
    <>
      <Wrapper>
        <AdminManagementHeader state={state} setState={setState} />
        <Content>
          {state === "req-sc" ? <SchoolRequest /> : <ActiveMeetings />}
        </Content>
      </Wrapper>
    </>
  );
};

export default AdminManagement;
