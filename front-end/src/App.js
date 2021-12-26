import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState,lazy, Suspense } from "react";

import Setup from "./Components/Spinner/Spinner";

import '../src/Assets/styles/general-styles.css'

const MainPage = lazy(() => import('./Components/MainPage/MainPage'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Background = lazy(() => import('./Components/Background/Background'));


export const authContext = createContext();

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Suspense fallback={<Setup/>}>
      <Router>
      <authContext.Provider value={{auth, setAuth}}>
        <Routes>
          <Route path='/' element={<Background component = {<MainPage/>}/>}/>
          <Route path='/accounts/manager/profile/:id' element={<Background component = {<Dashboard/>}/>}>
          </Route>
        </Routes>
      </authContext.Provider>
      </Router>
    </Suspense>

  );
}

export default App;
