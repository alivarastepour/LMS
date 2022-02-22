import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainHeader from "../MainPage/Header";
import { guestJoin } from "./GuestLoginHandlers";
import { Wrapper, Content } from "./GuestLogin.styles";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Alert, Snackbar, Tooltip } from "@mui/material";

const GuestLogin = () => {
  const classID = useParams().id;
  const navigator = useNavigate();
  const nav = () => navigator("/404");
  const [name, setName] = useState("");
  const [clazz, setClazz] = useState({});
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(true);
  const [open, setOpen] = useState(false);
  const fetchData = useCallback(() => {
    axios
      .get(`http://localhost:8000/study/class/${classID}/name/`)
      .then((res) => setClazz(res.data))
      .catch(function (e) {
        if (e.response.status === 404) {
          nav();
        }
      });
  }, [classID]);
  const withInput = (Component) => {
    if (!clazz.running) {
      return (
        <Tooltip
          title={
            <div style={{ fontFamily: "vazir" }}>کلاس هنوز آغاز نشده است</div>
          }
        >
          {Component}
        </Tooltip>
      );
    } else {
      return Component;
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(clazz.running);
  return (
    <>
      <MainHeader />
      <Wrapper>
        <h1 className="headerBox">
          ورود مهمان به {" " + clazz.class}, مدرسه {clazz.school}
        </h1>
        <div className="flex-container">
          <div>
            {withInput(
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="input"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!clazz.running}
              />
            )}
          </div>
          <div>
            <button
              className="button"
              onClick={() =>
                guestJoin(
                  classID,
                  name,
                  setLink,
                  setMessage,
                  setSuccess,
                  setOpen
                )
              }
              disabled={!clazz.running}
            >
              <b>دریافت لینک ورود</b>
            </button>
          </div>
        </div>
      </Wrapper>
      )
      <Footer />
      <Content>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
        >
          <Alert severity={success ? "success" : "error"}>
            <div className="message">{message}</div>
          </Alert>
        </Snackbar>
      </Content>
    </>
  );
};

export default GuestLogin;
