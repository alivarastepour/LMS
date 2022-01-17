export const ClassSettingsReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET-CLASS-NAME":
      newState = { ...state, name: action.payload };
      break;
    case "SET-CLASS-WELCOME-MSG":
      newState = { ...state, welcome: action.payload };
      break;
    case "SET-CLASS-MAX-ATTENDEES":
      newState = { ...state, maxParticipants: action.payload };
      break;
    case "SET-CLASS-DURATION":
      newState = { ...state, duration: action.payload };
      break;
    case "SET-CLASS-RECORD":
      newState = { ...state, record: action.payload };
      break;
    case "SET-CLASS-AUTO-RECORD":
      newState = { ...state, autoStartRecording: action.payload };
      break;
    case "SET-CLASS-PAUSE-RECORD":
      newState = { ...state, allowStartStopRecording: action.payload };
      break;
    case "SET-CLASS-WC-ATTENDEES":
      newState = { ...state, webcamsOnlyForModerator: action.payload };
      break;
    case "SET-MEETING-ID":
      newState = { ...state, meetingID: action.payload };
      break;
    case "SET-ID":
      newState = { ...state, id: action.payload };
      break;
    default:
      break;
  }
  return newState;
};
