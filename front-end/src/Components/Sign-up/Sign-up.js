import {Wrapper} from "../Sign-in/sign-in.styles";
import {Content} from "./Sign-up.styles";
import {useState} from "react";
import {signUpHandler} from "./Sign-up.handlers";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return <>
        <Wrapper>
            <Content>
                <form onSubmit={(e) => signUpHandler(e, username, password, email)}>
                    <div className="flex-item labelX">نام کاربری</div>
                    <div className="flex-item inputX">
                        <input value={username} onChange={e => setUsername(e.target.value)} className="inp" type='text' placeholder="کد ملی"/>
                    </div>
                    <div className="flex-item labelX" >رمز عبور</div>
                    <div className="flex-item inputX">
                        <input value={password} onChange={e => setPassword(e.target.value)} className="inp" type='text' placeholder="رمز عبور"/>
                    </div>
                    <div className="flex-item labelX" >ایمیل</div>
                    <div className="flex-item inputX">
                        <input value={email} onChange={e => setEmail(e.target.value)} className="inp" type='email' placeholder="ایمیل"/>
                    </div>
                    <div className="flex-item submitX">
                        <button type='submit' className="buttonX">ورود</button>
                    </div>
                </form>
            </Content>
        </Wrapper>
    </>
}
export default SignUp;