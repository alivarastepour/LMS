import { Wrapper, Content } from "./SchoolInformation.styles";
import SchoolInformationHeader from "./SchoolInformation.Header";
import TableView from "../TableView/TableView";
import SchoolProfile from "../SchoolProfile/SchoolProfile";
import { useState } from "react";
const SchoolInformation = () => {
    const [state, setState] = useState('info');
    return <>
        <Wrapper>
            <SchoolInformationHeader state={state} setState={setState}/>
            <Content>
                {
                    state === 'student' ? <TableView/> : state === 'info' ? <SchoolProfile/> : <h1>salam</h1>
                }
            </Content>
        </Wrapper>
    </>
}

export default SchoolInformation;