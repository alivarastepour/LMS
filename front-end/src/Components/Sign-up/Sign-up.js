import {Wrapper} from "../Sign-in/sign-in.styles";
import {Content} from "./Sign-up.styles";

const SignUp = () => {
    return <>
        <Wrapper>
            <Content>
                <div className="flex-item labelX">نام کاربری</div>
                <div className="flex-item inputX">
                    <input className="inp" type='text' placeholder="کد ملی"/>
                </div>
                <div className="flex-item labelX" >رمز عبور</div>
                <div className="flex-item inputX">
                    <input className="inp" type='password' placeholder="رمز عبور"/>
                </div>
                <div className="flex-item labelX" >ایمیل</div>
                <div className="flex-item inputX">
                    <input className="inp" type='email' placeholder="ایمیل"/>
                </div>
                <div className="flex-item submitX">
                    <button className="buttonX">ورود</button>
                </div>
            </Content>
        </Wrapper>
    </>
}
export default SignUp;