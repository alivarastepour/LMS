import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

import AutoComplete from "../AutoComplete/AutoComplete";
import SearchBox from "../SearchBox/SearchBox";

import { Table } from "./TableView.styles";

import useGet from "../../custom-hooks/useGet";
import { handleSearch, userHandler } from "./TableView.handlers";

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

  const renderButton = (user) => {
    if (user.status === "accepted") {
      return (
        <>
          <div className="acc st">پذیرفته شده</div>
          <button
            onClick={() =>
              userHandler(
                user,
                content,
                "rejected",
                setInformation,
                setStaticInformation
              )
            }
            className="st-button reject"
          >
            حذف
          </button>
        </>
      );
    } else if (user.status === "pending") {
      return (
        <div>
          <button
            onClick={() =>
              userHandler(
                user,
                content,
                "accepted",
                setInformation,
                setStaticInformation
              )
            }
            className="st-button accept"
          >
            پذیرفتن
          </button>
          <button
            onClick={() =>
              userHandler(
                user,
                content,
                "rejected",
                setInformation,
                setStaticInformation
              )
            }
            className="st-button reject"
          >
            رد کردن
          </button>
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
            <td className="header">کلاس</td>
            <td className="header">وضعیت</td>
          </tr>

          {information && information.length !== 0 ? (
            information.map((element) => {
              return (
                <tr className="hover" key={element.id}>
                  <td>{element.id}</td>
                  <td>
                    <div className="flex-td">
                      <div>
                        <Avatar src={element.photo} />
                      </div>
                      <div className="name">{element.name}</div>
                    </div>
                  </td>
                  <td>{element.username}</td>
                  <td>{element.class_name}</td>
                  <td>{renderButton(element)}</td>
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
