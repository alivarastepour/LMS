import { Wrapper } from "./Header.styles";
import logo from "../../Assets/photo_2022-01-21_13-58-45.jpg";
import { authContext } from "../../App";
import { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
const f = "سیستم مدیریت آموزش ";
const s = "(LMS) ";
const t = "آتی گستر";
const MainHeader = () => {
  const { auth } = useContext(authContext);
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
              <div className="logout-container">
                <div>
                  <LogoutIcon />
                </div>
                <div>خروج</div>
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
