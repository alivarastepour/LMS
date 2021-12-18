import MainPage from "./Components/MainPage/MainPage";
import '../src/Assets/styles/general-styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { reducer } from "./App.reducer";


const App = () => {
  const initialState = {
    loginState:false,
    signupState:false
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div className="App"><MainPage setProcessState={dispatch}/></div>}/>
      </Routes>
    </Router>
  );
}

export default App;
