import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import ClassSettings from "../ClassSettings/ClassSettings";
import { useParams } from "react-router-dom";

const ClassState = ({ url, setOpen, status, start_meeting_data }) => {
  const [os, so] = useState(false);
  const id = useParams().classID;

  const classStatus = () => {
    if (status) {
      return <div className="status on">در حال برگزاری</div>;
    } else {
      return <div className="status on start">شروع کلاس</div>;
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <>
      <div className="state">
        <div className="state-container">
          <div style={{ display: "inline-block" }}>وضعیت کلاس:</div>
          {classStatus()}
        </div>
        {url ? (
          <>
            <div className="link-container">
              <div className="enter">لینک ورود به کلاس</div>
              <div>
                <TextField
                  className="txt"
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
                  defaultValue={url}
                />
              </div>
            </div>
            <div className="date-container">
              <div style={{ display: "inline-block" }}>ساعت شروع :</div>
              <div className="status date">{start_meeting_data}</div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="status settings" onClick={() => so(true)}>
          تنظیمات کلاس
        </div>
      </div>
      <Dialog
        open={os}
        onClose={() => {
          so(false);
        }}
      >
        <DialogTitle sx={{ textAlign: "right", fontFamily: "vazir" }}>
          تنظیمات
        </DialogTitle>
        <ClassSettings class_id={id} setOpenSettings={so} />
      </Dialog>
    </>
  );
};

export default ClassState;
