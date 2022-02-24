import { Wrapper } from "./SchoolStatus.styles";

import Spinner from "../Spinner/Spinner";

const SchoolStatus = ({ status, setShowCreateSchool }) => {
  return (
    <>
      <Wrapper>
        {status === "pending" ? (
          <Spinner
            color={{ c: "#8b9ce8" }}
            text="درخواست شما در دست بررسی است. از شکیبایی شما متشکریم."
          />
        ) : (
          <div>
            <div className="error">
              متاسفانه درخواست شما توسط مدیریت سایت مورد پذیرش واقع نشده است.
            </div>
            <button
              onClick={() => setShowCreateSchool(true)}
              className="button"
            >
              درخواست مجدد
            </button>
          </div>
        )}
      </Wrapper>
    </>
  );
};
export default SchoolStatus;
