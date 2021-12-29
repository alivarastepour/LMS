import { useState } from "react";
import { useParams} from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Profile from "../Profile/Profile";
import DashboardHeader from "./Dashboard.header";
import SchoolManagment from "../SchoolManagment/SchoolManagment";

const Dashboard = () => {

    const defaultPage = useParams().profile;

    const [show, setShow] = useState(defaultPage !== 'managment');

    return <>
        <Wrapper>
            <DashboardHeader show={show} setShow={setShow}/>
            {
                show ? <Profile/> : <SchoolManagment/>
            }
        </Wrapper>
    </>
}

export default Dashboard;