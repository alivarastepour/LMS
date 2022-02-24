import { useContext } from "react";

import { Wrapper } from "./Header.styles";

import LogoutIcon from "@mui/icons-material/Logout";

import { authContext } from "../../App";
import { logoutHandler } from "./MainPageHandlers";

import logo from "../../Assets/logo.jpg";

const f = "سیستم مدیریت آموزش ";
const s = "(LMS) ";
const t = "آتی گستر";

const MainHeader = () => {
  const { auth, setAuth } = useContext(authContext);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="img-text-container">
            <div className="img-container">
              <img src={logo} alt="ati gostar" className="logo" />
            </div>
            <div className="text">{f + s + t}</div>
          </div>
          <div>
            {auth ? (
              <div
                className="logout-container"
                onClick={() => {
                  logoutHandler();
                  sessionStorage.removeItem("token");
                  sessionStorage.removeItem("user");
                  setAuth(false);
                }}
              >
                <div>
                  <LogoutIcon />
                </div>
                <div className="exit">خروج</div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default MainHeader;
