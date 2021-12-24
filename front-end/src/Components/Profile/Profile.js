import { Wrapper } from "./Profile.styles";
import {profileReducer} from "./Profile.reducer";
import Field from "../Field/Field";
import photo from "../../Assets/profile-placeholder.jpg"
import useGet from "../../custom-hooks/useGet";
import {useEffect, useReducer, useState} from "react";


const Profile = () => {


    const URL = 'http://localhost:8000/auth/whoami/' ;
    const TOKEN = sessionStorage.getItem('token') ;

    const [edit, setEdit] = useState(false);
    const data = useGet(URL, TOKEN);
    const [profileData, dispatch] = useReducer(profileReducer, {});

    useEffect(() => {
        dispatch({type:'SET-FIRSTNAME', payload:data.firstname});
        dispatch({type:'SET-LASTNAME', payload:data.lastname});
        dispatch({type:'SET-EMAIL', payload:data.email});
        dispatch({type:'SET-ADDRESS', payload:data.address});
        dispatch({type:'SET-USERNAME', payload:data.username});
        dispatch({type:'SET-ROLE', payload:data.role});
    },[data])

    console.log(profileData);

    return <>
        <Wrapper>
            <div className="grid-item item1">
                <img className="profile-image" alt="oi" src={photo}/>
                <div>
                <button className='button'>تغییر عکس کاربری</button>
                </div>
            </div>
            <div className="grid-item item2">
                <div className="label">نام</div>
                <Field edit={edit} editable={true} onChange={{change:dispatch,type:'SET-FIRSTNAME'}} content={profileData.firstname}/>
            </div>
            <div className="grid-item item3">
                <div className="label">نام خانوادگی</div>
                <Field edit={edit} editable={true} onChange={{change:dispatch,type:'SET-LASTNAME'}} content={profileData.lastname}/>
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
                <button onClick={() => setEdit(!edit)} className='button'>{edit ? 'اعمال تغییرات' : 'تغییر اطلاعات کابری'}</button>
            </div>
        </Wrapper>
    </>
}   
export default Profile;