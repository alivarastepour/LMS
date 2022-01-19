import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

import { Wrapper } from "./StudentManagement.styles";

const StudentManagement = () => {
  const listItemStyles = {
    direction: "rtl",
    textAlign: "right",
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const nav = () => navigate(`./${Math.random()}`);
  return (
    <>
      <Wrapper>
        <List
          sx={{
            width: "95%",
            margin: "auto",
            bgcolor: "white",
            borderRadius: 5,
          }}
          subheader={<div className="list-title">لیست کلاس ها</div>}
        >
          <ListItemButton>
            <ListItemText sx={listItemStyles}>
              <div className="list-item">مدار های الکتریکی و الکترونیکی</div>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText sx={listItemStyles}>
              <div className="list-item">مدار های منطقی</div>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText sx={listItemStyles}>
              <div className="list-item" onClick={() => nav()}>
                ساختمان داده
              </div>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText sx={listItemStyles}>
              <div className="list-item">عرفان عملی در اسلام</div>
            </ListItemText>
          </ListItemButton>
        </List>
      </Wrapper>
    </>
  );
};
export default StudentManagement;
