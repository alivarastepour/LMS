import {Wrapper} from "../Sign-in/sign-in.styles";
import {Content} from "./Sign-up.styles";
import {useState} from "react";
import {signUpHandler, setUser, setPass, set_Email  } from "./Sign-up.handlers";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    return <>
        <Wrapper>
            <Content>
                <form onSubmit={(e) => signUpHandler(e, username, password, email, role)}>
                    <div className="flex-item labelX">نام کاربری</div>
                    <div className="flex-item inputX">
                        <input autoFocus value={username} onChange={e => setUser(e.target.value, setUsername)} className="inp" type='text' placeholder="کد ملی"/>
                    </div>
                    <div className="flex-item labelX" >رمز عبور</div>
                    <div className="flex-item inputX">
                        <input value={password} onChange={e => setPass(e.target.value, setPassword)} className="inp" type='text' placeholder="رمز عبور"/>
                    </div>
                    <div className="flex-item labelX" >ایمیل</div>
                    <div className="flex-item inputX">
                        <input value={email} onChange={e => set_Email(e.target.value, setEmail)} className="inp" type='text' placeholder="ایمیل"/>
                    </div>
                    <div className="flex-item labelX" >نقش</div>
                    <div className="flex-item inputX">
                        <select onChange={e => setRole(e.target.value)} className="select">
                            <option value='manager'>مدیر</option>
                            <option value='teacher'>دبیر/استاد</option>
                            <option value='student'>دانش‌آموز/دانشجو</option>
                        </select>
                    </div>
                    <div className="flex-item submitX">
                        <button type='submit' className="buttonX">ثبت نام</button>
                    </div>
                </form>
            </Content>
        </Wrapper>
    </>
}
export default SignUp;