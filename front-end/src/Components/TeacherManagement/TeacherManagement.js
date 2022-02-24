import { useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./TeacherManagement.styles";
import { Content } from "../SchoolInformation/SchoolInformation.styles";

import TeacherManagementHeader from "./TeacherManagement.Header";
import TeacherClasses from "../TeacherClasses/TeacherClasses";
import SchoolList from "../SchoolList/SchoolList";

const TeacherManagement = () => {
  const defaultPage = useParams().info;
  const [state, setState] = useState(defaultPage);
  return (
    <>
      <Wrapper>
        <TeacherManagementHeader state={state} setState={setState} />
        <Content>
          {state === "info" ? (
            <TeacherClasses />
          ) : (
            <SchoolList content="teacher" />
          )}
        </Content>
      </Wrapper>
    </>
  );
};
export default TeacherManagement;
