import { Alert, Snackbar } from "@mui/material";
import { Content } from "./ErrorSnackbar.styles";

const ErrorSnackbar = ({ open, setOpen, msg, spaceX, spaceY }) => {
  const mb = spaceY ? spaceY : 10;
  const ml = spaceX ? spaceX : 10;
  return (
    <>
      <Content>
        <Snackbar
          sx={{ marginBottom: mb, marginLeft: ml }}
          open={open}
          onClose={() => setOpen("")}
          autoHideDuration={3000}
        >
          <Alert severity="error">
            <div className="msg">{msg}</div>
          </Alert>
        </Snackbar>
      </Content>
    </>
  );
};

export default ErrorSnackbar;
