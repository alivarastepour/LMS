import { useParams } from "react-router-dom";
import { Wrapper } from "./Dashboard.styles";
import Profile from "../Profile/Profile";
import DashboardHeader from "./Dashboard.header";
import { useState } from "react";


const Dashboard = () => {
    const userID = useParams();

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