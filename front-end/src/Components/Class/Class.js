import { useState } from "react";

import { Wrapper } from "./Class.styles";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import ClassInfo from "./ClassInfo";
import ClassState from "./ClassState";
import ClassRecords from "./ClassRecords";

const Class = () => {
  const [open, setOpen] = useState(false);
  const temp = "دکتر ممدرضا خان قلی زاده";
  const temp1 = "hsdeq0921";
  const temp2 = "مدار های الکتریکی و الکترونیکی";
  const status = true;
  const url = "https://www.github.com/users/alivarastepour/login";

  return (
    <>
      <Wrapper>
        <ClassInfo className={temp2} teacher={temp} id={temp1} />
        <ClassState setOpen={setOpen} status={status} url={url} />
        <ClassRecords />
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
