import { Wrapper, Content } from "./sign-in.styles";
import './sign-in.css'
const SignIn = () => {
    return <>
        <Wrapper>
            <Content>
                <div className="flex-item label">نام کاربری</div>
                <div className="flex-item input">
                    <input type='text' placeholder="نام کاربری"/>
                </div>
                <div className="flex-item label" >رمز عبور</div>
                <div className="flex-item input">
                    <input type='password' placeholder="رمز عبور"/>
                </div>
                <div className="flex-item submit">
                    <button>login</button>
                </div>
            </Content>
        </Wrapper>
    </>
}

export default SignIn;