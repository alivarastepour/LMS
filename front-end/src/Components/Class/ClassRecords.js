import { useEffect, useState } from "react";

import Spinner from "../Spinner/Spinner";

import useGet from "../../custom-hooks/useGet";

const ClassRecords = ({ classID }) => {
  const [loading, setLoading] = useState(true);
  const { data } = useGet(
    `http://localhost:8000/study/class/${classID}/recordings/`,
    sessionStorage.getItem("token")
  );
  useEffect(() => {
    if (data && data.length !== 0 && data.length) {
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      {loading ? (
        <Spinner color={{ c: "white" }} text="در حال بارگذاری" />
      ) : (
        <>
          <table>
            <tbody>
              <tr>
                <td colSpan={4} className="title">
                  جلسات ضبط شده
                </td>
              </tr>
              <tr>
                <td>نام</td>
                <td>تاریخ</td>
                <td>مدت زمان(دقیقه)</td>
                <td></td>
              </tr>
              {data &&
                data.length !== 0 &&
                data.length &&
                data.map((a) => {
                  return (
                    <tr className="hover" key={a.start_date}>
                      <td>{a.name}</td>
                      <td>{a.start_date}</td>
                      <td>{a.duration}</td>
                      <td>
                        <a
                          href={a.url}
                          target={"_blank"}
                          rel="noreferrer"
                          className="record-link"
                        >
                          مشاهده ضبط
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default ClassRecords;
