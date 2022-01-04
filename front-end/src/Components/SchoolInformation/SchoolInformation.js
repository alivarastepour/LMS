import { useState } from "react";

import { Wrapper, Content } from "./SchoolInformation.styles";
import SchoolInformationHeader from "./SchoolInformation.Header";
import TableView from "../TableView/TableView";
import SchoolProfile from "../SchoolProfile/SchoolProfile";
import CreateClass from "../ClassList/ClassList";

const SchoolInformation = () => {

    const [state, setState] = useState('info');

    return <>
        <Wrapper>
            <SchoolInformationHeader state={state} setState={setState}/>
            <Content>
                {
                    state === 'student' ? 
                    <TableView content='student'/> : 
                    state === 'info' ? 
                    <SchoolProfile/> :
                    state === 'teacher' ?
                    <TableView content='teacher'/>:
                    <CreateClass/>
                }
            </Content>
        </Wrapper>
    </>
}

export default SchoolInformation;