import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState,lazy, Suspense } from "react";

import Spinner from "./Components/Spinner/Spinner";


const MainPage = lazy(() => import('./Components/MainPage/MainPage'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Background = lazy(() => import('./Components/Background/Background'));

export const authContext = createContext(false);

const App = () => {

  const [auth, setAuth] = useState(false);

  return (
    <Suspense fallback={<Spinner color={{c:'#8b9ce8'}}/>}>
      <Router>
      <authContext.Provider value={{auth, setAuth}}>
        <Routes>
          <Route path='/' element={<Background component = {<MainPage/>}/>}/>
          <Route path='/accounts/manager/:id' element={<Background component = {<Dashboard/>}/>}>
            <Route path=':profile' component= {<Background component = {<Dashboard/>}/>}/>
            <Route path=':management' component= {<Background component = {<Dashboard/>}/>}/>
          </Route>
        </Routes>
      </authContext.Provider>
      </Router>
    </Suspense>
  );
}

export default App;
