import axios from "axios";
import { FormEvent } from "react";

export const valid_username = (username: string) =>
  !isNaN(Number(username[username.length - 1])) || username.length === 0;

export const submitHandler = (
  e: FormEvent<HTMLFormElement>,
  state: {
    username: string;
    password: string;
    validUsername: string;
    validPassword: string;
  },
  dispatch: Function,
  setAuth: Function,
  nav: Function
): void => {
  let validUsername, validPassword;
  if (state.username.length !== 10) {
    dispatch({ type: "VALID-USERNAME", payload: false });
    validUsername = false;
  } else {
    dispatch({ type: "VALID-USERNAME", payload: true });
    validUsername = true;
  }
  if (state.password.trim() === "") {
    dispatch({ type: "VALID-PASSWORD", payload: false });
    validPassword = false;
  } else {
    dispatch({ type: "VALID-PASSWORD", payload: true });
    validPassword = true;
  }
  if (validUsername && validPassword) {
    axios
      .post("http://localhost:8000/auth/login/", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        sessionStorage.setItem("user", res.data.id);
        sessionStorage.setItem("token", res.data.token);
        dispatch({ type: "VALID-LOG-IN", payload: true });
        setAuth(true);
        nav();
      })
      .catch(() => {
        dispatch({ type: "VALID-LOG-IN", payload: false });
        setAuth(false);
      });
  }
  e.preventDefault();
};
