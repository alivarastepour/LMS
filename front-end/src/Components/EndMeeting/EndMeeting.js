import { Wrapper } from "./EndMeeting.styles";
import "./EndMeeting.styles";
import MainHeader from "../MainPage/Header";
import Footer from "../Footer/Footer";
const EndMeeting = () => {
  return (
    <>
      <MainHeader />
      <Wrapper>
        <h1 className="header">جلسه به پایان رسیده است.</h1>
        <h4 className="subheader">با تشکر از مشارکت شما</h4>
      </Wrapper>
      ‌<Footer />
    </>
  );
};

export default EndMeeting;
