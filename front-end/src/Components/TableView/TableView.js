import { useEffect, useState } from "react";

import AutoComplete from "../AutoComplete/AutoComplete";
import SearchBox from "../SearchBox/SearchBox";

import { Table } from "./TableView.styles";

import useGet from "../../custom-hooks/useGet";
import { handleSearch } from "./TableView.handlers";

const fakeData = [
  { name: "رضا", status: "pending", username: 8567858, id: 3 },
  { name: "مجید", status: "pending", username: "67547", id: 8 },
  { name: "سهراب", status: "pending", username: 35435, id: 6 },
  { name: "علی", status: "accepted", username: 1234, id: 1 },
  { name: "تقی", status: "accepted", username: 345354, id: 4 },
  { name: "نقی", status: "accepted", username: 675745, id: 5 },
  { name: "خدا", status: "accepted", username: "4874", id: 10 },
  { name: "متین", status: "rejected", username: "8677586", id: 7 },
  { name: "محبوب", status: "rejected", username: "5353", id: 9 },
  { name: "محمد", status: "rejected", username: 54654, id: 2 },
];

const TableView = ({ content }) => {
  const URL = `http://localhost:8000/study/${content}-list/`;
  const TOKEN = sessionStorage.getItem("token");

  const { data } = useGet(URL, TOKEN);

  const [information, setInformation] = useState(data.requests);

  const [staticInformation, setStaticInformation] = useState(data.requests);

  const [searchTerm, setSearchTerm] = useState("نام");

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setInformation(data.requests);
    setStaticInformation(data.requests);
  }, [data]);

  const renderButton = (state) => {
    if (state === "accepted") {
      return (
        <>
          <div className="acc st">پذیرفته شده</div>
          <button className="st-button reject">حذف</button>
        </>
      );
    } else if (state === "pending") {
      return (
        <div>
          <button className="st-button accept">پذیرفتن</button>
          <button className="st-button reject">رد کردن</button>
        </div>
      );
    } else {
      return <div className="rej">رد شده</div>;
    }
  };

  return (
    <>
      <Table>
        <tbody>
          <tr className="no-hover">
            <td colSpan={2} className="input-container">
              <SearchBox
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearch={handleSearch}
                staticInformation={staticInformation}
                setInformation={setInformation}
                searchTerm={searchTerm}
                placeHolder="جستجو بر اساس نام, کدملی ..."
                optionsMap={[{ name: "نام" }, { username: "کدملی" }]}
              />
            </td>
            <td colSpan={2}>
              <AutoComplete
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                options={["کدملی", "نام"]}
              />
            </td>
          </tr>
          <tr className="no-hover">
            <td className="header">ردیف</td>
            <td className="header">نام</td>
            <td className="header">کدملی</td>
            <td className="header">وضعیت</td>
          </tr>

          {fakeData ? (
            fakeData.map((element) => {
              return (
                <tr className="hover" key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.username}</td>
                  <td>{renderButton(element.status)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} className="no-result">
                موردی یافت نشد
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableView;
