import { useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./Class.styles";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import ClassInfo from "./ClassInfo";
import ClassState from "./ClassState";
import ClassRecords from "./ClassRecords";

import useGet from "../../custom-hooks/useGet";

const Class = () => {
  const class_id = useParams().classID;

  const { data } = useGet(
    `http://localhost:8000/study/class/${class_id}/info/`,
    sessionStorage.getItem("token")
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <ClassInfo
          className={data && data.name}
          teacher={data && data.teacher}
          id={class_id}
        />
        <ClassState
          setOpen={setOpen}
          status={data.is_running}
          url={data.join_link}
          date={data.start_meeting_data}
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

export default Class;
