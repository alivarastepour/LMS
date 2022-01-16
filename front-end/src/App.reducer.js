export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-LOGIN-STATE":
      newState = { ...state, loginState: action.payload };
      break;
    case "SET-SIGNUP-STATE":
      newState = { ...state, signupState: action.payload };
      break;
    default:
      break;
  }
  return newState;
};
