import { useParams } from "react-router-dom";
import { Wrapper } from "./Dashboard.styles";


const Dashboard = () => {
    const userID = useParams();
    console.log(userID.id);

    return <>
        <Wrapper/>
    </>
}
export default Dashboard;