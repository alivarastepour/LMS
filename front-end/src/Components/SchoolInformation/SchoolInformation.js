import { useState } from "react";

import { Wrapper, Content } from "./SchoolInformation.styles";
import SchoolInformationHeader from "./SchoolInformation.Header";
import TableView from "../TableView/TableView";
import SchoolProfile from "../SchoolProfile/SchoolProfile";

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
                    <TableView content='teacher'/>
                }
            </Content>
        </Wrapper>
    </>
}

export default SchoolInformation;