import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./ClassManagement.styles";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import ClassInfo from "./ClassInfo";
import ClassState from "./ClassState";
import ClassRecords from "./ClassRecords";

import useGet from "../../custom-hooks/useGet";

const ClassManagement = () => {
  const class_id = useParams().classID;

  const { data } = useGet(
    `http://localhost:8000/study/class/${class_id}/info/`,
    sessionStorage.getItem("token")
  );
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState();
  useEffect(() => {
    if (data) {
      setUrl(data.url);
    }
  }, [data]);
  return (
    <>
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
    </>
  );
};

export default ClassManagement;
