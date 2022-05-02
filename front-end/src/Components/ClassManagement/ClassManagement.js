import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./ClassManagement.styles";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import ClassInfo from "./ClassInfo";
import ClassState from "./ClassState";
import ClassRecords from "./ClassRecords";

import useGet from "../../custom-hooks/useGet";
import { host } from "../../Global/host";
import MainHeader from "../MainPage/Header";
import Footer from "../Footer/Footer";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";

const ClassManagement = () => {
  const class_id = useParams().classID;
  const [er, setEr] = useState("");

  const { data, error } = useGet(
    `${host}study/class/${class_id}/info/`,
    sessionStorage.getItem("token")
  );
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState();
  useEffect(() => {
    setEr(error);
    if (data) {
      setUrl(data.url);
    }
  }, [data, error]);
  return (
    <>
      <MainHeader />
      <Wrapper>
        <ClassInfo className={data && data.name} id={class_id} />
        <ClassState
          setOpen={setOpen}
          status={data.is_running}
          url={url}
          date={data.start_meeting_data}
          setUrl={setUrl}
        />
        <ClassRecords classID={class_id} />
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
        >
          <Alert severity="success" sx={{ borderRadius: "10px" }}>
            <div className="succes">لینک کلاس به کلیپ‌بورد الصاق شد</div>
          </Alert>
        </Snackbar>
      </Wrapper>
      <ErrorSnackbar
        msg={typeof er === "object" ? "" : er}
        open={er === {} ? false : !!er}
        setOpen={setEr}
        // spaceX={2}
        // spaceY={8}
      />
      <Footer />
    </>
  );
};

export default ClassManagement;
