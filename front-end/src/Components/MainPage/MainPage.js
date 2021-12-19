import { Wrapper, Content, Heading } from "./MainPage.styles";
import Header from "../Header/Header";
import SignIn from "../Sign-in/Sign-in";
import SignUp from "../Sign-up/Sign-up";
import '../../Assets/styles/general-styles.css';
import {useState} from "react";
import Typewriter from 'typewriter-effect';



const MainPage = () => {
    
    const [state, setState] = useState(true);

    return <>
        <Wrapper>
            <Content>
                <Header login={state} setLogin={setState}/>
                {state ? 
                <SignIn action='SET-LOGIN-STATE' /> : 
                <SignUp action='SET-SIGNUP-STATE' />}   
            </Content>

            <Heading>
                <h1>سیستم آموزش آنلاین آتی‌گستر</h1>

                <Typewriter onInit={(typewriter) => {
                    typewriter.pauseFor(2500).deleteAll()
                }}
                options={{autoStart:true,loop:true, cursor:'', strings:['اتل متل توتوله', 'گاو حسن چجوره', 'نه شیر داره نه پستون','شیرشو بردن هندستون']}}
                />

            </Heading>

        </Wrapper>
    </>
}

export default MainPage;