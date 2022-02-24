import { useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper, Content } from "./SchoolInformation.styles";
import SchoolInformationHeader from "./SchoolInformation.Header";
import TableView from "../TableView/TableView";
import SchoolProfile from "../SchoolProfile/SchoolProfile";
import CreateClass from "../ClassList/ClassList";

const SchoolInformation = () => {
  const defaultPage = useParams().info;

  const [state, setState] = useState(defaultPage);

  return (
    <>
      <Wrapper>
        <SchoolInformationHeader state={state} setState={setState} />
        <Content>
          {state === "students" ? (
            <TableView content="student" />
          ) : state === "info" ? (
            <SchoolProfile />
          ) : state === "teachers" ? (
            <TableView content="teacher" />
          ) : (
            <CreateClass />
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export default SchoolInformation;
