import { useState } from "react";
import { Wrapper } from "./SchoolInformation.Header.styles";

const SchoolInformationHeader = ({state, setState}) => {

    // const [tab, setTab] = useState('student');

    return <>
        <Wrapper>
            <button onClick={() => setState('info')} className={`button ${state === 'info' ? 'active' : 'inactive'}`}>اطلاعات مدرسه</button>
            <button onClick={() => setState('teacher')} className={`button margin ${state === 'teacher' ? 'active' : 'inactive'}`}>معلمان</button>
            <button onClick={() => setState('student')} className={`button margin ${state === 'student' ? 'active' : 'inactive'}`}>دانش‌آموزان</button>
        </Wrapper>
    </>
}
export default SchoolInformationHeader;