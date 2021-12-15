import axios from "axios";
import {FormEvent} from "react";

export const submitHandler = (e:FormEvent<HTMLFormElement>, state: {username:string, password:string, validUsername:string, validPassword:string}, dispatch:Function):void => {
    let vu, vp ;
    if (state.username.length !== 10){
        dispatch({type:'VALID-USERNAME', payload:false})
        vu = false;
    }
    else{
        dispatch({type:'VALID-USERNAME', payload:true})
        vu = true;
    }
    if (state.password.trim() === ''){
        dispatch({type:'VALID-PASSWORD', payload:false})
        vp = false;
    }
    else{
        dispatch({type:'VALID-PASSWORD', payload:true})
        vp = true;
    }
    if (vu && vp){
        axios.post('http://localhost:8000/auth/login/', {
            username:state.username,
            password:state.password
        }).then((res) => {
            sessionStorage.setItem('user',res.data.token);
            dispatch({type:'VALID-LOG-IN', payload:true})
        }).catch(e => dispatch({type:'VALID-LOG-IN', payload:false}));
    }
    e.preventDefault();
}
