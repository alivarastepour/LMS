import { Wrapper, Content } from "./sign-in.styles";
import './sign-in.css'
const SignIn = ({login}) => {
    return <>
        <Wrapper>
            <Content>
                <div className="flex-item label">نام کاربری</div>
                <div className="flex-item input">
                    <input className="inp" type='text' placeholder="کد ملی"/>
                </div>
                <div className="flex-item label" >رمز عبور</div>
                <div className="flex-item input">
                    <input className="inp" type='password' placeholder="رمز عبور"/>
                </div>
                <div className="flex-item submit">
                    <button className="button">ورود</button>
                </div>
            </Content>
        </Wrapper>
    </>
}

export default SignIn;