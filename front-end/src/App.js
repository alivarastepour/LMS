import MainPage from "./Components/MainPage/MainPage";
import '../src/Assets/styles/general-styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const authContext = createContext();

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
    <authContext.Provider value={{auth, setAuth}}>
      <Routes>
        <Route path='/' element={<div className="App"><MainPage/></div>}/>
        <Route path='/accounts/manager/:id' element={<div>helloooo</div>}/>
      </Routes>
    </authContext.Provider>
    </Router>

  );
}

export default App;
