import { FormEvent } from "react";
import axios from "axios";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signUpHandler = (
  e: FormEvent<HTMLFormElement>,
  state: {
    username: string;
    password: string;
    email: string;
    role: string;
    validUsername: boolean;
    validPassword: boolean;
    validEmail: boolean;
  },
  dispatch: Function,
  action: string,
  nav: Function,
  setAuth: Function
) => {
  if (state.validUsername && state.validPassword && state.validUsername) {
    axios
      .post("http://localhost:8000/auth/signup/", {
        username: state.username,
        password: state.password,
        email: state.email,
        role: state.role,
      })
      .then((response) => {
        dispatch({ type: "VALID-SIGN-UP", payload: true });
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user", response.data.id);
        setAuth(true);
        nav();
      })
      .catch((error) => {
        setAuth(false);
        dispatch({ type: "VALID-SIGN-UP", payload: false });
        console.log(error.message);
      });
  }
  e.preventDefault();
};

export const valid_username = (username: string, dispatch: Function) => {
  if (username.length !== 10 || isNaN(Number(username)))
    dispatch({ type: "VALID-USERNAME", payload: false });
  else dispatch({ type: "VALID-USERNAME", payload: true });
};

export const valid_password = (password: string, dispatch: Function) => {
  if (password.length < 8) dispatch({ type: "VALID-PASSWORD", payload: false });
  else dispatch({ type: "VALID-PASSWORD", payload: true });
};

export const valid_email = (email: string, dispatch: Function) => {
  const valid = EMAIL_PATTERN.test(email);
  if (!valid) dispatch({ type: "VALID-EMAIL", payload: false });
  else dispatch({ type: "VALID-EMAIL", payload: true });
};

const clearFields = (dispatch: Function) => {
  dispatch({ type: "SET-USERNAME", payload: "" });
  dispatch({ type: "SET-PASSWORD", payload: "" });
  dispatch({ type: "SET-EMAIL", payload: "" });
  dispatch({ type: "SET-ROLE", payload: "" });
};
