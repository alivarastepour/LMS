import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainHeader from "../MainPage/Header";
import { guestJoin } from "./GuestLoginHandlers";
import { Wrapper } from "./GuestLogin.styles";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "@mui/material";

const GuestLogin = () => {
  const namex = "کلاس اول";
  const classID = useParams().id;
  const navigator = useNavigate();
  const nav = () => navigator("/404");
  const [name, setName] = useState("");
  const [clazz, setClazz] = useState({});
  const fetchData = useCallback(() => {
    axios
      .get(`http://localhost:8000/study/class/${classID}/name/`)
      .then((res) => setClazz(res.data))
      .catch(function (e) {
        if (e.response.status === 404) {
          nav();
        }
      });
  }, [classID, nav]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <MainHeader />
      <Wrapper>
        <h1 className="headerBox">
          ورود مهمان به {" " + clazz.class}, مدرسه {clazz.school}
        </h1>
        <div className="flex-container">
          <div>
            <Tooltip
              title={
                <div style={{ fontFamily: "vazir" }}>
                  کلاس هنوز آغاز نشده است
                </div>
              }
            >
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="input"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!clazz.running}
              />
            </Tooltip>
          </div>
          <div>
            <button
              className="button"
              onClick={() => guestJoin(classID, name)}
              disabled={!clazz.running}
            >
              <b>دریافت لینک ورود</b>
            </button>
          </div>
        </div>
      </Wrapper>
      )
      <Footer />
    </>
  );
};

export default GuestLogin;
