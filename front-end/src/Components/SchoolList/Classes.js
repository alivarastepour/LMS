import { Checkbox } from "@mui/material";
import { useState } from "react";
import { Wrapper } from "./Classes.styles";
import { joinHandler } from "./classesHandler";

const Classes = ({ classes, action }) => {
  const [selected, setSelected] = useState([]);

  const addClass = (event, id) => {
    if (!event.target.checked) {
      setSelected((prev) => prev.filter((a) => a !== id));
    } else {
      setSelected((prev) => {
        const temp = prev.concat(id);
        return temp;
      });
    }
  };

  return (
    <Wrapper>
      <table className="table1">
        <tbody>
          <tr>
            <td></td>
            <td>ردیف</td>
            <td>ارائه دهنده</td>
            <td>نام کلاس</td>
          </tr>
          {classes.map((w) => {
            return (
              <tr key={w.id} className="hover">
                <td>
                  <Checkbox onClick={(event) => addClass(event, w.id)} />
                </td>
                <td>{w.id}</td>
                <td>{w.instructor}</td>
                <td>{w.className}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="button acc"
        onClick={() => {
          joinHandler(selected);
        }}
      >
        ارسال درخواست
      </button>
      <button className="button" onClick={() => action(false)}>
        نمی‌خوام
      </button>
    </Wrapper>
  );
};
export default Classes;
