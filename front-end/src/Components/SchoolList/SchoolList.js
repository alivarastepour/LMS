import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import { useState } from "react";
import { Wrapper } from "./SchoolList.styles";
const fakeData = [
  {
    id: 1,
    name: "هوی",
    mName: "رستم",
    status: "خوب",
    classes: ["f", "a", "x"],
  },
  {
    id: 2,
    name: "اوی",
    mName: "سهراب",
    status: "بد",
    classes: ["f", "d", "s"],
  },
  { id: 3, name: "عا", mName: "صبا", status: "زشت", classes: ["e", "s", "x"] },
  {
    id: 4,
    name: "اون",
    mName: "گرزعلی",
    status: "شاتر",
    classes: ["f", "k", "i"],
  },
  {
    id: 5,
    name: "سیک",
    mName: "شتر",
    status: "ویپلش",
    classes: ["g", "u", "i"],
  },
  { id: 6, name: "وات؟", mName: "شاش", status: "شت", classes: ["i", "u", "g"] },
  { id: 7, name: "فاک", mName: "عمو", status: "نیا", classes: ["w", "z", "x"] },
];

const SchoolList = () => {
  const [show, setShow] = useState(-1);
  return (
    <>
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <td className="header">ردیف</td>
              <td className="header">نام مدرسه</td>
              <td className="header">نام مدیر</td>
              <td className="header">وضعیت</td>
            </tr>
            {fakeData.map((e) => {
              return (
                <>
                  <tr
                    className="hover"
                    key={e.id}
                    onClick={() =>
                      setShow((prev) => (prev === e.id ? -1 : e.id))
                    }
                  >
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.mName}</td>
                    <td>
                      {e.status}
                      {show !== e.id ? <ExpandMore /> : <ExpandLess />}
                    </td>
                  </tr>
                  <Collapse in={show === e.id}>
                    <List>
                      {e.classes.map((a) => {
                        return (
                          <ListItemButton key={Math.random()}>
                            <ListItem>{a}</ListItem>
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};
export default SchoolList;
