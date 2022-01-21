import { Wrapper } from "./StudentClasses.styles";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { useState } from "react";
import StudentClassesHeader from "./StudentClasses.Header";
const items = ["درس۱", "درس۲", "درس۳", "درس۴", "درس۵", "درس۶"];
const classes = ["مدرسه۱", "مدرسه۲", "مدرس۳", "مدرسه۴", "پالام پولوم پیلیش"];

const listItemTextStyles = {
  direction: "rtl",
  textAlign: "right",
};
const listItemButtonStyles = {
  marginTop: "20px",
  borderRadius: 4,
};
const listStyles = {
  width: "95%",
  margin: "auto",
  bgcolor: "white",
  borderRadius: 5,
};

const StudentClasses = () => {
  const [state, setState] = useState("");
  return (
    <>
      <Wrapper>
        <List
          sx={listStyles}
          subheader={
            <StudentClassesHeader
              state={state}
              setState={setState}
              classes={classes}
            />
          }
        >
          {items.length !== 0 ? (
            items.map((e) => {
              return (
                <ListItemButton sx={listItemButtonStyles} key={e}>
                  <ListItemText sx={listItemTextStyles}>
                    <div className="list-item">{e}</div>
                  </ListItemText>
                </ListItemButton>
              );
            })
          ) : (
            <div className="no-class">شما کلاسی ندارید.</div>
          )}
        </List>
      </Wrapper>
    </>
  );
};
export default StudentClasses;
