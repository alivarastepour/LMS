import { useState } from "react";

import { Wrapper } from "./Dashboard.styles";
import Profile from "../Profile/Profile";
import DashboardHeader from "./Dashboard.header";


const Dashboard = () => {

    const [state, setState] = useState(true);

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