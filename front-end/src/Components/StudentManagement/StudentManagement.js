import { useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./StudentManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";

import StudentManagementHeader from "./StudentManagement.Header";
import StudentClasses from "../StuedntClasses/StudentClasses";
import SchoolList from "../SchoolList/SchoolList";

const StudentManagement = () => {
  const defaultPage = useParams().info;
  const [state, setState] = useState(defaultPage);
  return (
    <>
      <Wrapper>
        <StudentManagementHeader state={state} setState={setState} />
        <Content>
          {state === "info" ? (
            <StudentClasses />
          ) : (
            <SchoolList content="student" />
          )}
        </Content>
      </Wrapper>
    </>
  );
};
export default StudentManagement;
