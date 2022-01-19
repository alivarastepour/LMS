import { useNavigate } from "react-router-dom";

import { Wrapper } from "./Dashboad.header.styles";

const DashboardHeader = ({ show, setShow, dashboradTitle }) => {
  const navigator = useNavigate();

  const nav = (url) => navigator(url);

  const holder = () => {
    if (dashboradTitle === "manager") {
      return "مدیریت مدرسه";
    } else if (dashboradTitle === "teacher") {
      return "مدیریت کلاس‌ها";
    } else {
      return "کلاس‌ها";
    }
  };

  return (
    <>
      <Wrapper>
        <div className="flex-item">
          <button
            onClick={() => {
              nav("./profile");
              setShow(true);
            }}
            className={`header-button ${show ? "show" : "hide"}`}
          >
            پروفایل
          </button>
        </div>
        <div className="flex-item">
          <button
            onClick={() => {
              nav("./management");
              setShow(false);
            }}
            className={`header-button ${show ? "hide" : "show"}`}
          >
            {holder()}
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default DashboardHeader;
