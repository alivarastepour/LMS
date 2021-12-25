import {useEffect, useReducer, useState} from "react";

import { Wrapper } from "./Profile.styles";
import Field from "../Field/Field";

import {profileReducer} from "./Profile.reducer";
import { profileEditHandler } from "./profile-edit.handler";
import useGet from "../../custom-hooks/useGet";

import photo from "../../Assets/profile-placeholder.jpg";
import { ROLE } from "./ROLE";

const Profile = () => {


    const url = 'http://localhost:8000/auth/whoami/' ;
    const TOKEN = sessionStorage.getItem('token') ;

    const [edit, setEdit] = useState(false);
    const [pro, setPro] = useState('');
    const data = useGet(url, TOKEN);
    const [profileData, dispatch] = useReducer(profileReducer, {});
    // console.log('i received : ');
    
    useEffect(() => {
        dispatch({type:'SET-FIRSTNAME', payload:data.first_name || ''});
        dispatch({type:'SET-LASTNAME', payload:data.last_name || ''});
        dispatch({type:'SET-EMAIL', payload:data.email || ''});
        dispatch({type:'SET-ADDRESS', payload:data.address || ''});
        dispatch({type:'SET-USERNAME', payload:data.username || ''});
        dispatch({type:'SET-ROLE', payload:data.role} || '');
    },[data])


    const handlerIMG = (selectedFile) => {
        const file = URL.createObjectURL(selectedFile.target.files[0]);
        setPro(file);
    }

    return <>
        <Wrapper>
            <div className="grid-item item1">
                <img className="profile-image" alt="oi" src={pro || photo}/>
                <div>
                <button className='button'>
                    <label htmlFor="label">تغییر عکس کاربری</label>
                    <input onChange={e => handlerIMG(e)} id="label" accept="image/*" type='file'/>
                </button>
                </div>
            </div>
            <div className="grid-item item2">
                <div className="label">نام</div>
                <Field edit={edit} editable={true} onChange={{change:dispatch,type:'SET-FIRSTNAME'}} content={profileData.first_name}/>
            </div>
            <div className="grid-item item3">
                <div className="label">نام خانوادگی</div>
                <Field edit={edit} editable={true} onChange={{change:dispatch,type:'SET-LASTNAME'}} content={profileData.last_name}/>
            </div>
            <div className="grid-item item4">
                <div className="label">کدملی</div>
                <Field edit={edit} editable={false} content={profileData.username}/>
            </div>
            <div className="grid-item item5">
                <div className="label">ایمیل</div>
                <Field edit={edit} editable={true} onChange={{change:dispatch,type:'SET-EMAIL'}} content={profileData.email}/>
            </div>
            <div className="grid-item item6">
                <div className="label">آدرس</div>
                <Field edit={edit} editable={true} onChange={{change:dispatch,type:'SET-ADDRESS'}} content={profileData.address}/>
            </div>
            <div className="grid-item item7">
                <div className="label">نقش</div>
                <Field edit={edit} editable={false} content={profileData.role}/>
            </div>
            <div className="grid-item item8">
                <button onClick={() => profileEditHandler(edit, setEdit, profileData)} className='button'>{edit ? 'اعمال تغییرات' : 'تغییر اطلاعات کابری'}</button>
            </div>
        </Wrapper>
    </>
}   
export default Profile;