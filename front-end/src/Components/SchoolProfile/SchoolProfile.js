import { Wrapper } from "./SchoolProfile.styles";
import Field from "../Field/Field";
import photo from '../../Assets/profile-placeholder.jpg'
import { useEffect, useReducer, useState } from "react";
import { schoolProfileReducer } from "./schoolProfile.reducer";

import useGet from "../../custom-hooks/useGet";

import { profileImageEditHandler } from "../../Global/global-functions";

const SchoolProfile = () => {

    const initialState = {
        schoolName:'',
        schoolId:'',
        schoolAddress:''
    }
    
    const URL = 'http://localhost:8000/study/school/';
    const TOKEN = sessionStorage.getItem('token');

    const {data} = useGet(URL, TOKEN);


    const [state, setState] = useState(false);

    const [info, dispatch] = useReducer(schoolProfileReducer,initialState);

    useEffect(() => {
        dispatch({type:'SET-SCHOOL-ADDRESS',payload:data.address});
        dispatch({type:'SET-SCHOOL-ID',payload:data.school_id});
        dispatch({type:'SET-SCHOOL-NAME',payload:data.name});
        dispatch({type:'SET-SCHOOL-IMAGE',payload:data.image});
    },[data])

    return <>
        <Wrapper>
            <div className="flex-item image">
                <img src={info.schoolImage || photo} alt="img not found"/>
                <button className="button">
                    <label htmlFor="photo">تغییر عکس مدرسه</label>
                    <input onChange={e => profileImageEditHandler(e, dispatch)} id="photo" accept="image/*" type='file'/>
                </button>
            </div>
            <div className="flex-item content">
                <div className="label">شناسه مدرسه</div>
                <Field
                edit={state}
                content={info.schoolId}
                editable={false}/>
            </div>
            <div className="flex-item content">
                <div className="label">نام مدرسه</div>
                <Field
                edit={state} 
                content={info.schoolName} 
                editable={true} 
                onChange={{change:dispatch, type:'SET-SCHOOL-NAME'}}/>
            </div>
            <div className="flex-item content">
                <div className="label">آدرس مدرسه</div>
                <Field 
                edit={state} 
                content={info.schoolAddress} 
                editable={true} 
                onChange={{change:dispatch, type:'SET-SCHOOL-ADDRESS'}}/>
            </div>
            <div className="flex-item content change">
                <button
                onClick={() => setState((prev) => setState(!prev))} 
                className="button">{state ? 'ثبت تغییرات' : 'تغییر اطلاعات'}</button>
            </div>
        </Wrapper>
    </>
}

export default SchoolProfile;