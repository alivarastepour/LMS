import { useState } from "react";

import { Wrapper } from "./ActiveMeetings.styles";

import Alert from "../Alert/Alert";
import { joinAsAdmin, forceEnd } from "./ActiveMeetings.handlers";

import { Snackbar, Alert as A } from "@mui/material";

import useGet from "../../custom-hooks/useGet";

const ActiveMeetings = () => {
  const [url, setUrl] = useState("");
  const [ended, setEnded] = useState(false);
  const { data } = useGet(
    "http://localhost:8000/study/admin/meetings/",
    sessionStorage.getItem("token")
  );
  return (
    <>
      <Wrapper>
        {data && data.length && data.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <td className="header">ردیف</td>
                <td className="header">شناسه جلسه</td>
                <td className="header">نام جلسه</td>
                <td className="header">تعداد شرکت کنندگان</td>
                <td className="header"></td>
              </tr>
              {data.map((a, b) => {
                return (
                  <tr className="hover" key={b}>
                    <td>{b}</td>
                    <td>{a.meetingID}</td>
                    <td>{a.meetingName}</td>
                    <td>{a.participantCount}</td>
                    <td>
                      {!url ? (
                        <button
                          className="button enter"
                          onClick={() => {
                            joinAsAdmin(a.meetingID, setUrl);
                          }}
                        >
                          دریافت لینک
                        </button>
                      ) : (
                        <button className="button enter">
                          <a
                            className="a"
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ورود
                          </a>
                        </button>
                      )}
                      <button
                        className="button end"
                        onClick={() => forceEnd(a.meetingID, setEnded)}
                      >
                        خاتمه
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Alert />
        )}
        <Snackbar
          sx={{ marginBottom: 10, marginLeft: 10 }}
          open={ended}
          onClose={() => setEnded(false)}
          autoHideDuration={3000}
        >
          <A severity="success">
            <div className="ended">جلسه توسط شما به اتمام رسید</div>
          </A>
        </Snackbar>
      </Wrapper>
    </>
  );
};

export default ActiveMeetings;
