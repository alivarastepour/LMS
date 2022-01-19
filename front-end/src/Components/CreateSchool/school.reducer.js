export const schoolReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-SCHOOL-ID":
      newState = { ...state, schoolId: action.payload };
      break;
    case "SET-SCHOOL-NAME":
      newState = { ...state, schoolName: action.payload };
      break;
    case "SET-SCHOOL-ADDRESS":
      newState = { ...state, schoolAdrress: action.payload };
      break;
    default:
      break;
  }
  return newState;
};
