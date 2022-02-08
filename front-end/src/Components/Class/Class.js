import { useState } from "react";

import { Wrapper } from "./Class.styles";

import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ClassInfo from "./ClassInfo";

const Class = () => {
  const [open, setOpen] = useState(false);
  const temp = "دکتر ممدرضا خان قلی زاده";
  const temp1 = "hsdeq0921";
  const temp2 = "مدار های الکتریکی و الکترونیکی";
  const status = true;
  const url = "https://www.github.com/users/alivarastepour/login";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };
  const classStatus = () => {
    if (status) {
      return <div className="status on">در حال برگزاری</div>;
    } else {
      return <div className="status off">شروع نشده</div>;
    }
  };
  return (
    <>
      <Wrapper>
        <ClassInfo className={temp2} teacher={temp} id={temp1} />
        <div className="state">
          <div className="state-container">
            <div style={{ display: "inline-block" }}>وضعیت کلاس:</div>
            {classStatus()}
          </div>
          <div className="link-container">
            <div className="enter">لینک ورود به کلاس</div>
            <div>
              <TextField
                defaultValue={url}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="copy class link to clipboard">
                        <IconButton
                          onClick={() => {
                            setOpen(true);
                            copyToClipboard();
                          }}
                        >
                          <ContentCopyTwoToneIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="open class">
                        <IconButton disabled={false} onClick={() => {}}>
                          <OpenInNewIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                size="small"
                sx={{ width: "800px", direction: "ltr" }}
              />
            </div>
          </div>
        </div>
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
