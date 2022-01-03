import { Wrapper } from "./SchoolInformation.Header.styles";

const SchoolInformationHeader = ({state, setState}) => {

    return <>
        <Wrapper>
            <button onClick={() => setState('info')} className={`button ${state === 'info' ? 'active' : 'inactive'}`}>اطلاعات مدرسه</button>
            <button onClick={() => setState('teacher')} className={`button margin ${state === 'teacher' ? 'active' : 'inactive'}`}>معلمان</button>
            <button onClick={() => setState('student')} className={`button margin ${state === 'student' ? 'active' : 'inactive'}`}>دانش‌آموزان</button>
            <button onClick={() => setState('class')} className={`button margin ${state === 'class' ? 'active' : 'inactive'}`}>کلاس‌ها</button>
        </Wrapper>
    </>
}
export default SchoolInformationHeader;