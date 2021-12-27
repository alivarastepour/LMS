import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Profile from "../Profile/Profile";
import DashboardHeader from "./Dashboard.header";

import {authContext} from "../../App";


const Dashboard = () => {

    const navigator = useNavigate();

    const nav = () => navigator(`/`);

    const [state, setState] = useState(true);

    const {auth, setAuth} = useContext(authContext);

    useEffect(() => {
        if (!auth) {
            nav();
        }
    });

    return <>
        <Wrapper>
            <DashboardHeader show={state} setShow={setState}/>
            {
                state ? <Profile/> : <div>hi there</div>
            }
        </Wrapper>
    </>
}

export default Dashboard;