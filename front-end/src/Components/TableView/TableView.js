import { useEffect, useState } from "react";

import { Avatar } from "@mui/material";

import SearchBox from "../SearchBox/SearchBox";
import Select from "../Select/Select";

import { Table, Wrapper } from "./TableView.styles";

import useGet from "../../custom-hooks/useGet";
import { handleSearch, userHandler } from "./TableView.handlers";
import { FILTER, renderButton } from "./Constant";
import { host } from "../../Global/host";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";

const TableView = ({ content }) => {
  const URL = `${host}study/${content}-list/`;
  const TOKEN = sessionStorage.getItem("token");

  const { data } = useGet(URL, TOKEN);

  const [information, setInformation] = useState(data.requests);

  const [staticInformation, setStaticInformation] = useState(data.requests);

  const [searchTerm, setSearchTerm] = useState("name");

  const [searchValue, setSearchValue] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    setInformation(data.requests);
    setStaticInformation(data.requests);
  }, [data]);
  return (
    <>
      <Wrapper>
        <div className="flex-header">
          <div>
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
          </div>
          <div>
            <Select
              title="فیلتر"
              selectWidth={300}
              size="small"
              value={searchTerm}
              setValue={setSearchTerm}
              data={FILTER}
            />
          </div>
        </div>
        <Table>
          <tbody>
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
                    <td>
                      {renderButton(
                        element,
                        userHandler,
                        content,
                        setInformation,
                        setStaticInformation,
                        setError
                      )}
                    </td>
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
        <ErrorSnackbar
          msg={error}
          open={!!error}
          setOpen={setError}
          spaceX={13}
        />
      </Wrapper>
    </>
  );
};

export default TableView;
