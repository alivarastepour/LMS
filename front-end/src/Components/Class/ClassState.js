import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ClassState = ({ url, setOpen, status, date }) => {
  const classStatus = () => {
    if (status) {
      return <div className="status on">در حال برگزاری</div>;
    } else {
      return <div className="status off">شروع نشده</div>;
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
            <div className="date-container">
              <div style={{ display: "inline-block" }}>ساعت شروع :</div>
              <div className="status date">{date}</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ClassState;
