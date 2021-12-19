import { Wrapper } from "./Dashboad.header.styles";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
    return <>
        <Wrapper>
            <div className="flex-item">
                <Link className="header-link" to='./'>
                    <button className="header-button">
                        پروفایل
                    </button>
                </Link>
            </div>
            <div className="flex-item">
                <Link className="header-link" to='./'>
                    <button className="header-button">
                        مدیریت مدرسه
                    </button>
                </Link>
            </div>
        </Wrapper>
    </>
}
export default DashboardHeader;