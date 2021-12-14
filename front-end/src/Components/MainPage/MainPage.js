import { Wrapper } from "./MainPage.styles";
import Header from "../Header/Header";
import SignIn from "../Sign-in/Sign-in";
import SignUp from "../Sign-up/Sign-up";
import '../../Assets/styles/general-styles.css';
import React, {useState} from "react";

const MainPage = () => {
    const [state, setState] = useState(true);
    return <>
        <Wrapper>
            <Header login={state} setLogin={setState}/>
            {
                state ? <SignIn login={state}/> : <SignUp/>
            }
        </Wrapper>
    </>
}

export default MainPage;