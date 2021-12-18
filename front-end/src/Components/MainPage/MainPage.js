import { Wrapper, Content, Heading } from "./MainPage.styles";
import Header from "../Header/Header";
import SignIn from "../Sign-in/Sign-in";
import SignUp from "../Sign-up/Sign-up";
import '../../Assets/styles/general-styles.css';
import {useState} from "react";

const MainPage = () => {
    const [state, setState] = useState(true);
    return <>
        <Wrapper>
            <Content>
                <Header login={state} setLogin={setState}/>
                    {
                        state ? <SignIn/> : <SignUp/>
                    }
            </Content>
            <Heading>
                <h1>سیستم آموزش آنلاین آتی‌گستر</h1>
            </Heading>
        </Wrapper>
    </>
}

export default MainPage;