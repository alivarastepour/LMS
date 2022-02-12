import { Checkbox, List, ListItem, ListItemButton } from "@mui/material";
import { Wrapper } from "./Files.styles";

const temp = [
  "https://localhost:8000/2",
  "https://localhost:8000/3",
  "https://localhost:8000/4",
  "https://localhost:8000/1",
  "https://localhost:8000/5",
  "https://localhost:8000/6",
];

const Files = ({ files }) => {
  const a = files.length === 0 ? temp : files;
  return (
    <>
      <Wrapper>
        <List>
          {a.map((a, i) => {
            return (
              <ListItemButton key={i}>
                <ListItem
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "1.2rem",
                  }}
                >
                  <div className="cont">
                    <a href={a} target="_blank" rel="noreferrer" className="a">
                      {a.length > 40 ? a.slice(0, 39) + "..." : a}
                    </a>
                  </div>
                </ListItem>
                <Checkbox />
              </ListItemButton>
            );
          })}
        </List>
        <button
          onClick={() => {
            // updateClassSettings(value);
            // setOpenSettings(false);
          }}
          className="button acc"
        >
          ذخیره
        </button>
        <button onClick={() => {}} className="button rej">
          نمی‌خوام
        </button>
      </Wrapper>
    </>
  );
};

export default Files;
