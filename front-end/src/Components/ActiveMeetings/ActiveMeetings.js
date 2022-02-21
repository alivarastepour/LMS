import useGet from "../../custom-hooks/useGet";
import Alert from "../Alert/Alert";
import { Wrapper } from "./ActiveMeetings.styles";
import { joinAsAdmin, forceEnd } from "./ActiveMeetings.handlers";
import { useState } from "react";
const ActiveMeetings = () => {
  const [url, setUrl] = useState("");
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
                        onClick={() => forceEnd(a.meetingID)}
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
      </Wrapper>
    </>
  );
};

export default ActiveMeetings;
