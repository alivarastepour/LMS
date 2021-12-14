import axios from "axios";
import {FormEvent} from "react";



export const submitHandler = (e:FormEvent<HTMLFormElement>, username:string, password:string):void => {
    console.log(username);
    console.log(password);
    axios.post('http://localhost:8000/auth/login/', {
        username:username,
        password:password
    }).then((res) => {
        console.log(res.status);
    }).catch(e => console.log(e))

    e.preventDefault();
}

export const setUser =(username:string, setter:Function):void => {
    if (!isNaN(Number(username[username.length - 1])) || username.length === 0)
        setter(username)
}

export const setPass = (password:string, setter:Function) => {
    setter(password)
}