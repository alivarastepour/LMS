import {FormEvent} from "react";
import axios from "axios";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


export const signUpHandler = (e:FormEvent<HTMLFormElement>, username:string, password:string, email:string, role:string) => {
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(role);
    axios.post('http://localhost:8000/auth/signup/', {
        'username':username,
        'password':password,
        'email':email,
        'role':role
    }).then((res) => {
        console.log(res);
    })

    const validPassword = password.length >= 8 ;
    const validEmail = EMAIL_PATTERN.test(email) ;
    if(validEmail && validPassword)
        console.log('hello world');
         
    e.preventDefault();
}

export const setUser =(username:string, setter:Function):void => {
    if (!isNaN(Number(username[username.length - 1])) || username.length === 0)
        setter(username)
}
export const setPass = (password:string, setter:Function) => {
    setter(password)
}
export const set_Email = (email:string, setter:Function) => {
    setter(email)
}