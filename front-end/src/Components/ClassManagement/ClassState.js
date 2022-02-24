import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import {
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import ClassSettings from "../ClassSettings/ClassSettings";
import { useParams } from "react-router-dom";
import { createMeeting, fileUpload } from "./classManagementHandlers";
import Files from "../Files/Files";

const ClassState = ({ url, setOpen, status, start_meeting_data, setUrl }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openFiles, setOpenFiles] = useState(false);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const id = useParams().classID;

  const classStatus = () => {
    if (status) {
      return <div className="status on">در حال برگزاری</div>;
    } else {
      return (
        <div
          className="status on start"
          onClick={() => {
            createMeeting(id, setUrl, setError, setOpenSnackbar);
          }}
        >
          شروع کلاس
        </div>
      );
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <>
      <div className="state">
        <div className="state-container">{classStatus()}</div>
        {url ? (
          <>
            <div className="link-container">
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
                          <a href={url} rel="noreferrer" target="_blank">
                            <IconButton disabled={false}>
                              <OpenInNewIcon />
                            </IconButton>
                          </a>
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
          </>
        ) : (
          <></>
        )}
        {!url && (
          <>
            <div
              className="status settings"
              onClick={() => setOpenSettings(true)}
            >
              تنظیمات کلاس
            </div>
            <div className="status file-upload">
              <label htmlFor="files" className="label">
                آپلود فایل(ها)
              </label>
              <input
                type="file"
                id="files"
                multiple
                accept="  .doc, .docx, .ppt, .pptx, .pdf, .xls, .xlsx, .txt, .rtf, .odt, .ods, .odp, .odg, .odc, .odi, .jpg, .jpeg, .png"
                onChange={(e) => fileUpload(e, id)}
              />
            </div>
            <div
              className="status view-files"
              onClick={() => setOpenFiles(true)}
            >
              مشاهده فایل‌ها
            </div>
          </>
        )}
      </div>
      <Dialog
        open={openSettings}
        onClose={() => {
          setOpenSettings(false);
        }}
      >
        <DialogTitle sx={{ textAlign: "right", fontFamily: "vazir" }}>
          تنظیمات
        </DialogTitle>
        <ClassSettings class_id={id} setOpenSettings={setOpenSettings} />
      </Dialog>
      <Dialog
        open={openFiles}
        onClose={() => {
          setOpenFiles(false);
        }}
      >
        <DialogTitle sx={{ textAlign: "right", fontFamily: "vazir" }}>
          لیست فایل ها
        </DialogTitle>
        <Files />
      </Dialog>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          <div className="error">{error}</div>
        </Alert>
      </Snackbar>
    </>
  );
};

export default ClassState;
