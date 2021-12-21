import { Wrapper, Content } from "./sign-in.styles";
import {useReducer, useContext}from "react";
import {submitHandler} from "./Sign-in.handlers";
import {signInReducer} from "./Sign-in.reducer";
import { authContext } from "../../App";
import { useNavigate } from "react-router-dom";
const SignIn = () => {

    const {auth, setAuth} = useContext(authContext);

    const navigator = useNavigate();
    
    const initialState = {
        username:'',
        password:'',
        validUsername:true,
        validPassword:true,
        validLogin:true
    }

    const [state, dispatch] = useReducer(signInReducer, initialState);
    const {username, password, validUsername, validPassword, validLogin} = state;

    const nav = () => navigator(`./accounts/manager/${sessionStorage.getItem('user')}`);            
    

    return <>
        <Wrapper>
            <Content>
                <form onSubmit={(e) => submitHandler(e, state, dispatch, auth, setAuth, nav)}>
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
                        <div className={validLogin ? 'error-msg-hide errorLogin' : 'error-msg-show errorLogin'}>نام کاربری یا رمز عبور صحیح نمی باشد.</div>
                        <button
                            type='submit'
                            className="button"
                            >ورود</button>
                    </div>
                </form>
            </Content>
        </Wrapper>
    </>
}

export default SignIn;