import {FormEvent} from "react";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


export const signUpHandler = (e:FormEvent<HTMLFormElement>, username:string, password:string, email:string) => {
    console.log(username);
    console.log(password);
    console.log(email);
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