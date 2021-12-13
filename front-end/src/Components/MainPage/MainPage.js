import { Wrapper } from "./MainPage.styles";
import Header from "../Header/Header";
import SignIn from "../Sign-in/Sign-in";
import '../../Assets/styles/general-styles.css';
import React from "react";

const MainPage = () => {
    return <>
        <Wrapper>
            <Header/>
            <SignIn/>
        </Wrapper>
    </>
}

export default MainPage;