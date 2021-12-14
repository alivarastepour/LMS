import { Wrapper } from "./MainPage.styles";
import Header from "../Header/Header";
import SignIn from "../Sign-in/Sign-in";
import '../../Assets/styles/general-styles.css';
import React, {useState} from "react";

const MainPage = () => {
    const [state, setState] = useState(true);
    return <>
        <Wrapper>
            <Header login={state} setLogin={setState}/>
            {
                state ? <SignIn login={state}/> : <div>this should be sign-up but it ain't</div>
            }
        </Wrapper>
    </>
}

export default MainPage;