import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import { Wrapper } from "./Class.styles";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";

const Class = () => {
  const temp = "دکتر ممدرضا خان قلی زاده";
  const status = true;
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
        <div className="flex-header">
          <div className="flex-item">کلاس مدار های الکتریکی و الکترونیکی</div>
          <div className="flex-item">ارائه دهنده: {temp}</div>
        </div>
        <div className="state">
          <div className="state-container">
            <div style={{ display: "inline-block" }}>وضعیت کلاس:</div>
            {classStatus()}
          </div>
          <div className="link-container">
            <div className="enter">لینک ورود به کلاس</div>
            <div>
              <TextField
                defaultValue="https://www.github.com/users/alivarastepour/login"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="copy to clipboard">
                        <IconButton>
                          <ContentCopyTwoToneIcon />
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
      </Wrapper>
    </>
  );
};

export default Class;
