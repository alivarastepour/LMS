import axios from "axios";
import {FormEvent} from "react";

export const submitHandler = (e:FormEvent<HTMLFormElement>, username:string, password:string):void => {
    axios.post('http://localhost:8000/auth/login/', {
        username:username,
        password:password
    }).then((res) => {
        console.log(res.status);
    }).catch(e => console.log(e));
    e.preventDefault();
}
