import { Wrapper, Content } from "./sign-in.styles";
import {useReducer} from "react";
import {submitHandler} from "./Sign-in.handlers";
import {signInReducer} from "./Sign-in.reducer";
const SignIn = () => {

    const initialState = {
        username:'',
        password:'',
        validUsername:true,
        validPassword:true
    }

    const [state, dispatch] = useReducer(signInReducer, initialState);
    const {username, password, validUsername, validPassword} = state;

    return <>
        <Wrapper>
            <Content>
                <form onSubmit={(e) => submitHandler(e, state, dispatch)}>
                    <div className="flex-item label">نام کاربری</div>
                    <div className="flex-item input">
                        <input
                            autoFocus className="inp" type='text' value={username}
                            onChange={e => dispatch({type:'SET-USERNAME', payload:e.target.value})}
                            placeholder="کد ملی"/>
                        <div className={validUsername ? 'error-msg-hide' : 'error-msg-show'}>لطفا نام کاربری خود را وارد کنید</div>
                    </div>
                    <div className="flex-item label" >رمز عبور</div>
                    <div className="flex-item input">
                        <input
                            className="inp"
                            type='password'
                            value={password}
                            onChange={e => dispatch({type:'SET-PASSWORD', payload:e.target.value})}
                            placeholder="رمز عبور"/>
                        <div className={validPassword ? 'error-msg-hide' : 'error-msg-show'}>لطفا رمزعبور خود را وارد کنید</div>
                    </div>
                    <div className="flex-item submit">
                        <button
                            type='submit'
                            className="button">ورود</button>
                    </div>
                </form>
            </Content>
        </Wrapper>
    </>
}

export default SignIn;