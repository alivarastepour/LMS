import { Wrapper } from "./SchoolProfile.styles";
import Field from "../Field/Field";
import photo from '../../Assets/profile-placeholder.jpg'
import { useReducer, useState } from "react";
import { schoolProfileReducer } from "./schoolProfile.reducer";
import useGet from "../../custom-hooks/useGet";

const SchoolProfile = () => {
    const URL = 'http://localhost:8000/study/school/';
    const TOKEN = sessionStorage.getItem('token');

    // const temp = useGet(URL,TOKEN);
    // console.log(temp);
    const initialState = {
        schoolName:'',
        schoolId:'',
        schoolAddress:''
    }
    const [state, setState] = useState(false);

    const [data, dispatch] = useReducer(schoolProfileReducer,initialState);

    return <>
        <Wrapper>
            <div className="flex-item image">
                <img src={photo} alt="img not found"/>
                <button className="button">تغییر عکس مدرسه</button>
            </div>
            <div className="flex-item content">
                <div className="label">شناسه مدرسه</div>
                <Field edit={state} content={data.schoolId} editable={false}/>
            </div>
            <div className="flex-item content">
                <div className="label">نام مدرسه</div>
                <Field edit={state} content={data.schoolName} editable={true} onChange={{change:dispatch, type:'SET-SCHOOL-NAME'}}/>
            </div>
            <div className="flex-item content">
                <div className="label">آدرس مدرسه</div>
                <Field edit={state} content={data.schoolAddress} editable={true} onChange={{change:dispatch, type:'SET-SCHOOL-ADDRESS'}}/>
            </div>
            <div className="flex-item content change">
                <button onClick={() => setState((prev) => setState(!prev))} className="button">{state ? 'ثبت تغییرات' : 'تغییر اطلاعات'}</button>
            </div>
        </Wrapper>
    </>
}
export default SchoolProfile;