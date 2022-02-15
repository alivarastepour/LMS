import React, { useCallback } from "react";
import { Wrapper } from "./AcceptedSchools.styles";
const fakeData = [
  { id: 1, sc_name: "بسیش", ma_name: "قفصث", state: "accepted" },
  { id: 2, sc_name: "بشسیب", ma_name: "یشبقثیثق", state: "rejected" },
  { id: 3, sc_name: "فقثف", ma_name: "یشثقلقیثق", state: "suspended" },
  { id: 4, sc_name: "فقصث", ma_name: "یشیشسیثق", state: "rejected" },
  { id: 5, sc_name: "بلسی", ma_name: "یشزسییثق", state: "rejected" },
  { id: 6, sc_name: "سیش", ma_name: "یشیلاتثق", state: "suspended" },
  { id: 7, sc_name: "عفغ", ma_name: "یشیمثق", state: "accepted" },
  { id: 8, sc_name: "دپرذ", ma_name: "یش۹غ۸یثق", state: "pending" },
];
const AcceptedSchools = () => {
  const status = useCallback((state) => {
    const acc = (
      <>
        <button className="button sus">تعلیق</button>
        <button className="button rem">حذف</button>
      </>
    );
    const rej = <>رد شده</>;
    const sus = (
      <>
        <button className="button acc">باز تایید</button>
        <button className="button rem">حذف</button>
      </>
    );
    const pen = (
      <>
        <button className="button acc">پذیرفتن</button>
        <button className="button rem">حذف</button>
      </>
    );
    if (state === "accepted") {
      return acc;
    } else if (state === "suspended") {
      return sus;
    } else if (state === "rejected") {
      return rej;
    } else if (state === "pending") {
      return pen;
    }
  }, []);
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
            {fakeData.map((a) => {
              return (
                <tr className="hover">
                  <td>{a.id}</td>
                  <td>{a.sc_name}</td>
                  <td>{a.ma_name}</td>
                  <td>{status(a.state)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

export default AcceptedSchools;
