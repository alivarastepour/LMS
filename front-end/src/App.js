import { createContext, useState, Suspense } from "react";

import Router from "./Router";
import Spinner from "./Components/Spinner/Spinner";

import "../src/Assets/styles/general-styles.css";

export const authContext = createContext(false);

const App = () => {
  const [auth, setAuth] = useState(sessionStorage.getItem("token"));

  return (
    <>
      <Suspense fallback={<Spinner color={{ c: "#8b9ce8" }} />}>
        <authContext.Provider value={{ auth, setAuth }}>
          <Router />
        </authContext.Provider>
      </Suspense>
    </>
  );
};

export default App;
