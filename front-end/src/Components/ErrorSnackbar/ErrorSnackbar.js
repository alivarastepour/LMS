import { Alert, Snackbar } from "@mui/material";
import { Content } from "./ErrorSnackbar.styles";

const ErrorSnackbar = ({ open, setOpen, msg }) => {
  return (
    <>
      <Content>
        <Snackbar
          sx={{ marginBottom: 10, marginLeft: 10 }}
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
