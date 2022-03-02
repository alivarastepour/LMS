import { Wrapper } from "./EndMeeting.styles";
import Footer from "../Footer/Footer";
import MainHeader from "../MainPage/Header";

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
