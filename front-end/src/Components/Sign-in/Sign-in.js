import { Wrapper, Content } from "./sign-in.styles";
import {useState} from "react";
import {submitHandler, setUser, setPass} from "./Sign-in.handlers";
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Wrapper>
            <Content>
                <form onSubmit={(e) => submitHandler(e, username, password)}>
                    <div className="flex-item label">نام کاربری</div>
                    <div className="flex-item input">
                        <input className="inp" type='text' value={username}
                               onChange={e => setUser(e.target.value, setUsername)}
                               placeholder="کد ملی"/>
                    </div>
                    <div className="flex-item label" >رمز عبور</div>
                    <div className="flex-item input">
                        <input className="inp" type='password' value={password} onChange={e => setPass(e.target.value, setPassword)} placeholder="رمز عبور"/>
                    </div>
                    <div className="flex-item submit">
                        <button type='submit' className="button">ورود</button>
                    </div>
                </form>

            </Content>
        </Wrapper>
    </>
}

export default SignIn;