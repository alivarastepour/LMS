import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import MainHeader from "../MainPage/Header";
import Footer from "../Footer/Footer";
import State from "./State";
import Messages from "./Messages";
import Actions from "./Actions";

import { Wrapper } from "./GuestLogin.styles";

import { guestJoin } from "./GuestLoginHandlers";
import { host } from "../../Global/host";

const GuestLogin = () => {
  const classID = useParams().id;
  const navigatorr = useNavigate();
  const nav = () => navigatorr("/404");

  const [name, setName] = useState("");
  const [clazz, setClazz] = useState({});
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(true);
  const [open, setOpen] = useState(false);

  const fetchData = useCallback(() => {
    axios
      .get(`${host}study/class/${classID}/name/`)
      .then((res) => setClazz(res.data))
      .catch(function (e) {
        if (e.response.status === 404) {
          nav();
        }
      });
  }, [classID]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <MainHeader />
      <Wrapper>
        <State
          name={name}
          clazz={clazz}
          setName={setName}
          guestJoin={guestJoin}
          classID={classID}
          setLink={setLink}
          setMessage={setMessage}
          setSuccess={setSuccess}
          setOpen={setOpen}
        />

        {link && (
          <Actions
            link={link}
            setMessage={setMessage}
            setSuccess={setSuccess}
            setOpen={setOpen}
          />
        )}
      </Wrapper>
      )
      <Footer />
      <Messages
        open={open}
        setOpen={setOpen}
        success={success}
        message={message}
      />
    </>
  );
};

export default GuestLogin;
