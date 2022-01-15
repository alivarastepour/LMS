export const ClassSettingsReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-CLASS-NAME":
      newState = { ...state, name: action.payload };
      break;
    case "SET-CLASS-ID":
      newState = { ...state, id: action.payload };
      break;
    case "SET-CLASS-WELCOME-MSG":
      newState = { ...state, msg: action.payload };
      break;
    case "SET-CLASS-MAX-ATTENDEES":
      newState = { ...state, maxAttendees: action.payload };
      break;
    case "SET-CLASS-DURATION":
      newState = { ...state, duration: action.payload };
      break;
    case "SET-CLASS-RECORD":
      newState = { ...state, rec: action.payload };
      break;
    case "SET-CLASS-AUTO-RECORD":
      newState = { ...state, autoRec: action.payload };
      break;
    case "SET-CLASS-PAUSE-RECORD":
      newState = { ...state, pauseRec: action.payload };
      break;
    case "SET-CLASS-MSG-ATTENDEES":
      newState = { ...state, msgAttendees: action.payload };
      break;
    case "SET-CLASS-WC-ATTENDEES":
      newState = { ...state, wcAttendees: action.payload };
      break;
    default:
      break;
  }
  return newState;
};
