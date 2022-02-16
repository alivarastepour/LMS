import { useCallback, useEffect, useState } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import SearchBox from "../SearchBox/SearchBox";
import { Wrapper } from "./SchoolRequest.styles";
import { searchHandler } from "./SchoolRequestHandlers";
import useGet from "../../custom-hooks/useGet";
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
const SchoolRequest = () => {
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
  const [searchTerm, setSearchTerm] = useState("شناسه مدرسه");
  const [searchValue, setSearchValue] = useState("");
  const [information, setInformation] = useState([]);
  const [staticInformation, setStaticInformation] = useState([]);
  const { data } = useGet(
    "http://localhost:8000/study/admin/schools/",
    sessionStorage.getItem("token")
  );
  useEffect(() => {
    setInformation(data);
    setStaticInformation(data);
  }, [data]);
  console.log(data);
  return (
    <>
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <td colSpan={3}>
                <SearchBox
                  placeHolder="جست‌وجوی مدارس بر اساس شناسه, نام و ..."
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  searchTerm={searchTerm}
                  staticInformation={staticInformation}
                  setInformation={setInformation}
                  handleSearch={searchHandler}
                />
              </td>
              <td colSpan={2}>
                <AutoComplete
                  setSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
                  options={["نام مدیر", "شناسه مدرسه", "نام مدرسه"]}
                />
              </td>
            </tr>
            <tr>
              <td className="header">ردیف</td>
              <td className="header">شناسه</td>
              <td className="header">نام مدرسه</td>
              <td className="header">نام مدیر</td>
              <td className="header">وضعیت</td>
            </tr>
            {fakeData.map((a) => {
              return (
                <tr className="hover">
                  <td>{a.id}</td>
                  <td>{"to be filled"}</td>
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

export default SchoolRequest;
