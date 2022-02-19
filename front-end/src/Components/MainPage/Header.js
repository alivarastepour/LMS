import { Wrapper } from "./Header.styles";
import logo from "../../Assets/photo_2022-01-21_13-58-45.jpg";
const f = "سیستم مدیریت آموزش ";
const s = "(LMS) ";
const t = "آتی گستر";
const MainHeader = () => {
  return (
    <>
      <Wrapper>
        <div className="img-container">
          <div>
            <img src={logo} alt="ati gostar" className="logo" />
          </div>
          <div className="text">{f + s + t}</div>
        </div>
      </Wrapper>
    </>
  );
};
export default MainHeader;
