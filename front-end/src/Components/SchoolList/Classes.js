import { useState } from "react";

import { Wrapper } from "./Classes.styles";

import { Checkbox } from "@mui/material";

import Alert from "../Alert/Alert";
import { joinHandler } from "./classesHandler";

const Classes = ({ classes, action, content }) => {
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
      {classes && classes.length !== 0 ? (
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
                  <td>{w.teacher}</td>
                  <td>{w.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Alert />
      )}
      <button
        className="button acc"
        onClick={() => {
          joinHandler(selected, content);
          action(false);
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
