import { Wrapper } from "./StudentClasses.styles";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
const StudentClasses = () => {
  const items = [
    "درس۱",
    "درس۲",
    "درس۳",
    "درس۴",
    "درس۵",
    "درس۶",
    "درس۷",
    "درس۸",
    "درس۹",
    "درس۱۰",
  ];
  const listItemStyles = {
    direction: "rtl",
    textAlign: "right",
  };
  const listStyles = {
    width: "95%",
    margin: "auto",
    bgcolor: "white",
    borderRadius: 5,
  };
  return (
    <>
      <Wrapper>
        <List
          sx={listStyles}
          subheader={<div className="list-title">لیست کلاس ها</div>}
        >
          {items.length !== 0 ? (
            items.map((e) => {
              return (
                <ListItemButton key={e}>
                  <ListItemText sx={listItemStyles}>
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
