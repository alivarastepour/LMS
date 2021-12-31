import { useState } from "react";
import { Wrapper } from "./SchoolInformation.Header.styles";

const SchoolInformationHeader = () => {

    const [tab, setTab] = useState('info');

    return <>
        <Wrapper>
            <button onClick={() => setTab('info')} className={`button ${tab === 'info' ? 'active' : 'inactive'}`}>اطلاعات مدرسه</button>
            <button onClick={() => setTab('teacher')} className={`button margin ${tab === 'teacher' ? 'active' : 'inactive'}`}>معلمان</button>
            <button onClick={() => setTab('student')} className={`button margin ${tab === 'student' ? 'active' : 'inactive'}`}>دانش‌آموزان</button>
        </Wrapper>
    </>
}
export default SchoolInformationHeader;