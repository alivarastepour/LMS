import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./Files.styles";

import { Checkbox, List, ListItem, ListItemButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import RemoveIcon from "@mui/icons-material/Remove";

import useGet from "../../custom-hooks/useGet";
import { handleSelect, handleRemove, fileHandler } from "./filesHandler";
const Files = () => {
  const id = useParams().classID;
  const URL = `http://localhost:8000/study/class/${id}/slide/`;
  const TOKEN = sessionStorage.getItem("token");

  const { data } = useGet(URL, TOKEN);

  const [selected, setSelected] = useState([]);
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    setSelected((prev) => {
      if (data && data.length) {
        return data.filter((value) => value.selected).map((value) => value.url);
      }
    });
  }, [data]);

  return (
    <>
      <Wrapper>
        <List>
          {data &&
            data.length &&
            data.length !== 0 &&
            data.map((a) => {
              return (
                <ListItemButton key={a.url}>
                  <ListItem
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="cont">
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="a"
                      >
                        {a.url.length > 40 ? a.url.slice(0, 39) + "..." : a.url}
                      </a>
                    </div>
                  </ListItem>
                  <Checkbox
                    color="primary"
                    checkedIcon={<DoneIcon />}
                    checked={selected ? selected.includes(a.url) : false}
                    onChange={(e) =>
                      handleSelect(e, a.url, setSelected, setRemove, remove)
                    }
                  />
                  <Checkbox
                    color="error"
                    checkedIcon={<RemoveIcon />}
                    checked={remove ? remove.includes(a.url) : false}
                    onChange={(e) =>
                      handleRemove(e, a.url, setSelected, setRemove, selected)
                    }
                  />
                </ListItemButton>
              );
            })}
        </List>
        <button
          onClick={() => fileHandler(selected, remove, id)}
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
