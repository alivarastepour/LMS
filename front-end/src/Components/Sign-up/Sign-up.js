import {useReducer} from "react";

import {Wrapper} from "../Sign-in/sign-in.styles";
import {Content} from "./Sign-up.styles";
import {signUpHandler, valid_username, valid_password, valid_email} from "./Sign-up.handlers";

import {signUpReducer} from "./Sign-up.reducer";

const SignUp = ({action}) => {

    const initialState = {
        username:'',
        password:'',
        email:'',
        role:'manager',
        validUsername:true,
        validPassword:true,
        validEmail:true,
        validSignUp:true
    }

    const [state, dispatch] = useReducer(signUpReducer,initialState);
    const {username, password, email, role, validUsername, validPassword, validEmail, validSignUp} = state ;

    return <>
        <Wrapper>
            <Content>
                <form
                    onSubmit={(e) => signUpHandler(e, state, dispatch, action)}>
                    <div className="flex-item label">نام کاربری</div>
                    <div className="flex-item input">
                        <input
                            autoFocus
                            value={username}
                            onChange={e => dispatch({type:'SET-USERNAME', payload:e.target.value})}
                            onBlur={() => valid_username(username, dispatch)}
                            className={`${validUsername ?  'inp' : 'inp error'}`}
                            type='text'
                            placeholder="کد ملی"/>
                        <div
                            className={validUsername ? 'error-msg-hide' : 'error-msg-show'}>لطفا کد ملی ده رقمی خود را وارد کنید</div>
                    </div>
                    <div className="flex-item label" >رمز عبور</div>
                    <div className="flex-item input">
                        <input
                            value={password}
                            onChange={e => dispatch({type:'SET-PASSWORD', payload:e.target.value})}
                            onBlur={() => valid_password(password, dispatch)}
                            className={`${validPassword ? 'inp' : 'inp error'}`}
                            type='text'
                            placeholder="رمز عبور"/>
                        <div
                            className={validPassword ? 'error-msg-hide' : 'error-msg-show'}>رمز عبور باید شامل حداقل هشت کاراکتر باشد</div>
                    </div>
                    <div className="flex-item label" >ایمیل</div>
                    <div className="flex-item input">
                        <input
                            value={email}
                            onChange={e => dispatch({type:'SET-EMAIL', payload:e.target.value})}
                            onBlur={() => valid_email(email, dispatch)}
                            className={`${validEmail ? 'inp' : 'inp error'}`}
                            type='text'
                            placeholder="ایمیل"/>
                        <div
                            className={validEmail ? 'error-msg-hide' : 'error-msg-show'}>لطفا آدرس ایمیل خود را به درستی وارد کنید</div>
                    </div>
                    <div className="flex-item label" >نقش</div>
                    <div className="flex-item input">
                        <select defaultValue='manager'
                            onChange={e => dispatch({type:'SET-ROLE', payload:e.target.value})}
                            className='select'
                        >
                            <option value='manager'>مدیر</option>
                            <option value='teacher'>دبیر/استاد</option>
                            <option value='student'>دانش‌آموز/دانشجو</option>
                        </select>
                    </div>
                    <div className="flex-item submit">
                        <div
                            className={validSignUp ? 'error-msg-hide errorSignup' : 'error-msg-show errorSignup'}>نام کاربری در سامانه وجود دارد.</div>
                        <button type='submit' className="button">ثبت نام</button>
                    </div>
                </form>
            </Content>
        </Wrapper>
    </>
}

export default SignUp;