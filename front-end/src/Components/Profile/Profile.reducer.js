export const profileReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-FIRSTNAME":
      newState = { ...state, first_name: action.payload };
      break;
    case "SET-LASTNAME":
      newState = { ...state, last_name: action.payload };
      break;
    case "SET-EMAIL":
      newState = { ...state, email: action.payload };
      break;
    case "SET-ADDRESS":
      newState = { ...state, address: action.payload };
      break;
    case "SET-USERNAME":
      newState = { ...state, username: action.payload };
      break;
    case "SET-ROLE":
      newState = { ...state, role: action.payload };
      break;
    case "SET-PHOTO":
      newState = { ...state, image: action.payload };
      break;
    default:
      return state;
  }
  return newState;
};
