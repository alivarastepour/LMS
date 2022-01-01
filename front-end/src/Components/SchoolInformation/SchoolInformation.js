import { Wrapper, Content } from "./SchoolInformation.styles";
import SchoolInformationHeader from "./SchoolInformation.Header";
import TableView from "../TableView/TableView";
import { useState } from "react";
const SchoolInformation = () => {
    const [state, setState] = useState('student');
    return <>
        <Wrapper>
            <SchoolInformationHeader state={state} setState={setState}/>
            <Content>
                {
                    state === 'student' ? <TableView/> : <div>to be completed</div>
                }
            </Content>
        </Wrapper>
    </>
}

export default SchoolInformation;