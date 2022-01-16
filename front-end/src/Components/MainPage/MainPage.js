import { useContext, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import { Wrapper, Content, Heading } from "./MainPage.styles";
import Header from "../Header/Header";
import SignIn from "../Sign-in/Sign-in";
import SignUp from "../Sign-up/Sign-up";
import Footer from "../Footer/Footer";

import { authContext } from "../../App";

const MainPage = () => {
  const { auth, setAuth } = useContext(authContext);

  const [state, setState] = useState(true);

  useEffect(() => {
    setAuth(false);
  }, []);

  return (
    <>
      <Wrapper>
        <Content>
          <Header login={state} setLogin={setState} />
          {state ? (
            <SignIn action="SET-LOGIN-STATE" />
          ) : (
            <SignUp action="SET-SIGNUP-STATE" />
          )}
        </Content>
        <Heading>
          <h1>سیستم آموزش آنلاین آتی‌گستر</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(2500).deleteAll();
            }}
            options={{
              autoStart: true,
              loop: true,
              cursor: "",
              strings: [
                "اتل متل توتوله",
                "گاو حسن چجوره",
                "نه شیر داره نه پستون",
                "شیرشو بردن هندستون",
              ],
            }}
          />
        </Heading>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MainPage;
