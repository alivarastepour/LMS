import { Wrapper } from "./Profile.styles";
import Field from "../Field/Field";
import photo from "../../Assets/Cover Background Images - Google Search (1).png"
const Profile = () => {
    return <>
        <Wrapper>
            <div className="grid-item item1">
                <img className="profile-image" alt="oi" src={photo}/>
            </div>
            <div className="grid-item item2">
                <div className="label">نام خانوادگی</div>
                <Field edit={true}/>
            </div>
            <div className="grid-item item3">
                <div className="label">نام</div>
                <Field edit={true}/>
            </div>
            <div className="grid-item item4">
                <div className="label">کدملی</div>
                <Field edit={true}/>
            </div>
            <div className="grid-item item5">
                <div className="label">تاریخ تولد</div>
                <Field edit={true}/>
            </div>
            <div className="grid-item item6">
                <div className="label">آدرس</div>
                <Field edit={true}/>
            </div>
        </Wrapper>
    </>
}   
export default Profile;