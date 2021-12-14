import {FormEvent} from "react";

export const signUpHandler = (e:FormEvent<HTMLFormElement>, username:string, password:string, email:string) => {
    console.log(username);
    console.log(password);
    console.log(email);
    e.preventDefault();
}