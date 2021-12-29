import { useState } from "react";
import { useParams} from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Profile from "../Profile/Profile";
import DashboardHeader from "./Dashboard.header";

const Dashboard = () => {

    const defaultPage = useParams().profile;

    const [show, setShow] = useState(defaultPage !== 'managment');

    return <>
        <Wrapper>
            <DashboardHeader show={show} setShow={setShow}/>
            {
                show ? <Profile/> : <div>hi there</div>
            }
        </Wrapper>
    </>
}

export default Dashboard;