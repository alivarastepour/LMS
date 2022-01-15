export const schoolProfileReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-SCHOOL-NAME":
      newState = { ...state, name: action.payload };
      break;
    case "SET-SCHOOL-ADDRESS":
      newState = { ...state, address: action.payload };
      break;
    case "SET-SCHOOL-ID":
      newState = { ...state, school_id: action.payload };
      break;
    case "SET-PHOTO":
      newState = { ...state, image: action.payload };
      break;
    default:
      break;
  }
  return newState;
};
