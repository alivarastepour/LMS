import { Snackbar, Alert } from "@mui/material";
import { Content } from "./GuestLogin.styles";

const Messages = ({ open, setOpen, success, message }) => {
  return (
    <>
      <Content>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
        >
          <Alert severity={success ? "success" : "error"}>
            <div className="message">{message}</div>
          </Alert>
        </Snackbar>
      </Content>
    </>
  );
};

export default Messages;
