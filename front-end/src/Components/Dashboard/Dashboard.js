import { useParams } from "react-router-dom";
import { Wrapper } from "./Dashboard.styles";
import Profile from "../Profile/Profile";
import DashboardHeader from "./Dashboard.header";


const Dashboard = () => {
    const userID = useParams();
    console.log(userID.id);

    return <>
        <Wrapper>
            <DashboardHeader/>
            <Profile/>
        </Wrapper>
    </>
}
export default Dashboard;