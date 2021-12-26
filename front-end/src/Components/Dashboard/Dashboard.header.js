import { Link } from "react-router-dom";

import { Wrapper } from "./Dashboad.header.styles";

const DashboardHeader = ({show, setShow}) => {

    return <>
        <Wrapper>
            <div className="flex-item">
                <Link className="header-link" to='./'>
                    <button
                        onClick={() => setShow(true)}
                        className={`header-button ${show ? 'show' : 'hide'}`}>
                        پروفایل
                    </button>
                </Link>
            </div>
            <div className="flex-item">
                <Link className="header-link" to='./'>
                    <button
                        onClick={() => setShow(false)}
                        className={`header-button ${show ? 'hide' : 'show'}`}>
                        مدیریت مدرسه
                    </button>
                </Link>
            </div>
        </Wrapper>
    </>
}

export default DashboardHeader;