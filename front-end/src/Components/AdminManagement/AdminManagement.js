import { useState } from "react";
import AdminManagementHeader from "./AdminManagement.Header";
import { Wrapper } from "./AdminManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";
import SchoolRequest from "../AllSchools/AllSchools";
import ActiveMeetings from "../ActiveMeetings/ActiveMeetings";
import { useParams } from "react-router-dom";

const AdminManagement = () => {
  const param = useParams().info;
  const [state, setState] = useState(param);
  return (
    <>
      <Wrapper>
        <AdminManagementHeader state={state} setState={setState} />
        <Content>
          {state === "info" ? <SchoolRequest /> : <ActiveMeetings />}
        </Content>
      </Wrapper>
    </>
  );
};

export default AdminManagement;
