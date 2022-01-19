import { valid_username } from "./Sign-in.handlers";

export const signInReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-USERNAME":
      const username = action.payload;
      if (valid_username(username)) newState = { ...state, username: username };
      else return state;
      break;
    case "SET-PASSWORD":
      newState = { ...state, password: action.payload };
      break;
    case "VALID-USERNAME":
      newState = { ...state, validUsername: action.payload };
      break;
    case "VALID-PASSWORD":
      newState = { ...state, validPassword: action.payload };
      break;
    case "VALID-LOG-IN":
      newState = { ...state, validLogin: action.payload };
      break;
    default:
      break;
  }
  return newState;
};
