import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

import { Wrapper } from "./StudentManagement.styles";
import StudentManagementHeader from "./StudentManagement.Header";
import { Content } from "../SchoolInformation/SchoolInformation.styles";

const items = [
  // "درس۱",
  // "درس۲",
  // "درس۳",
  // "درس۴",
  // "درس۵",
  // "درس۶",
  // "درس۷",
  // "درس۸",
  // "درس۹",
  // "درس۱۰",
];

const StudentManagement = () => {
  const listItemStyles = {
    direction: "rtl",
    textAlign: "right",
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const defaultPage = useParams().info;
  const [state, setState] = useState(defaultPage);
  const nav = () => navigate(`./randomeShit`);
  return (
    <>
      <Wrapper>
        <StudentManagementHeader state={state} setState={setState} />
        <Content>
          {state === "info" ? (
            items.length !== 0 ? (
              <List
                sx={{
                  width: "95%",
                  margin: "auto",
                  bgcolor: "white",
                  borderRadius: 5,
                }}
                subheader={<div className="list-title">لیست کلاس ها</div>}
              >
                {items.map((e) => {
                  return (
                    <ListItemButton key={e}>
                      <ListItemText sx={listItemStyles}>
                        <div className="list-item">{e}</div>
                      </ListItemText>
                    </ListItemButton>
                  );
                })}
              </List>
            ) : (
              <div className="no-class">شما کلاسی ندارید.</div>
            )
          ) : (
            <div className="no-class">کلاسا مدرسه</div>
          )}
        </Content>
      </Wrapper>
    </>
  );
};
export default StudentManagement;
