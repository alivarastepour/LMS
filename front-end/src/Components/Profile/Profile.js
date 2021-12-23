import { Wrapper } from "./Profile.styles";
import Field from "../Field/Field";
import photo from "../../Assets/photo_2021-12-23_14-13-13.jpg"
import useGet from "../../custom-hooks/useGet";
import {useState} from "react";



const Profile = () => {

    const URL = 'http://localhost:8000/auth/whoami/' ;
    const TOKEN = sessionStorage.getItem('token') ;
    const [edit, setEdit] = useState(false);
    const {data} = useGet(URL, TOKEN);

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
                <Field edit={edit} editable={true} content={data.firstname}/>
            </div>
            <div className="grid-item item3">
                <div className="label">نام خانوادگی</div>
                <Field edit={edit} editable={true} content={data.lastname}/>
            </div>
            <div className="grid-item item4">
                <div className="label">کدملی</div>
                <Field edit={edit} editable={false} content={data.username}/>
            </div>
            <div className="grid-item item5">
                <div className="label">ایمیل</div>
                <Field edit={edit} editable={true} content={'تو دو'}/>
            </div>
            <div className="grid-item item6">
                <div className="label">آدرس</div>
                <Field edit={edit} editable={true} content={data.address}/>
            </div>
            <div className="grid-item item7">
                <button onClick={() => setEdit(!edit)} className='button'>{edit ? 'اعمال تغییرات' : 'تغییر اطلاعات کابری'}</button>
            </div>
        </Wrapper>
    </>
}   
export default Profile;