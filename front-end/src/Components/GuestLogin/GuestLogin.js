import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainHeader from "../MainPage/Header";
import { Wrapper } from "./GuestLogin.styles";

const GuestLogin = () => {
  const name = "کلاس اول";
  const classID = useParams().id;
  return (
    <>
      <MainHeader />
      <Wrapper>
        <h1 className="headerBox">ورود مهمان به کلاس{" " + name}</h1>
        <div className="flex-container">
          <div>
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="input"
              autoFocus
            />
          </div>
          <div>
            <button className="button">
              <b>دریافت لینک ورود</b>
            </button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default GuestLogin;
