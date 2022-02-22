import { Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Actions = ({ link, setMessage, setSuccess, setOpen }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };
  return (
    <>
      <div className="link-container">
        <div>
          <Tooltip title="open">
            <a href={link} target="_blank" rel="noreferrer">
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
            </a>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="copy">
            <IconButton
              onClick={() => {
                setMessage("لینک کلاس به کلیپ‌بورد الصاق شد");
                setSuccess(true);
                setOpen(true);

                copyToClipboard();
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Actions;
