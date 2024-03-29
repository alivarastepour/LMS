import { Wrapper } from "./ClassList.styles";

import SearchBox from "../SearchBox/SearchBox";
import ClassSettings from "../ClassSettings/ClassSettings";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import { handleSearch, addClass, deleteClass } from "./classListHandlers";
import useGet from "../../custom-hooks/useGet";

import { useEffect, useState } from "react";
import Select from "../Select/Select";
import { FILTER } from "./Constants";

const CreateClass = () => {
  const URL = "http://localhost:8000/study/class";
  const TOKEN = sessionStorage.getItem("token");

  const { data } = useGet(URL, TOKEN);

  const [info, setInfo] = useState([]);

  const [staticInfo, setStaticInfo] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [searchTerm, setSearchTerm] = useState("name");

  const [className, setClassName] = useState("");

  const [openSettings, setOpenSettings] = useState(false);

  const [id, setId] = useState("");

  useEffect(() => {
    setStaticInfo(data.classes);
    setInfo(data.classes);
  }, [data]);

  return (
    <>
      <Wrapper>
        <div className="flex-header">
          <div className="flex-item">
            <SearchBox
              className="s-box"
              placeHolder="جستجو بر اساس نام کلاس , ارائه دهنده ..."
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearch={handleSearch}
              staticInformation={staticInfo}
              setInformation={setInfo}
              searchTerm={searchTerm}
            />
          </div>
          <div className="flex-item">
            <Select
              title=""
              selectWidth={300}
              value={searchTerm}
              setValue={setSearchTerm}
              data={FILTER}
              size="small"
            />
          </div>
          <div className="flex-item">
            <input
              placeholder="برای افزودن کلاس نام کلاس را وارد کنید."
              id="input"
              className="input"
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
          <div className="flex-item">
            <button
              className="button"
              onClick={() => {
                addClass(className, setInfo, setStaticInfo);
              }}
            >
              افزودن
            </button>
          </div>
        </div>
        <table className="table">
          <tbody>
            <tr className="no-hover">
              <td className="header">ردیف</td>
              <td className="header">نام کلاس</td>
              <td className="header">ارائه دهنده</td>
              <td className="header">وضعیت</td>
            </tr>
            {info && info.length !== 0 ? (
              info.map((e) => {
                return (
                  <tr className="hover" key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td colSpan={1}>{e.teacher || "مشخص نشده"}</td>
                    <td>
                      <button
                        onClick={() =>
                          deleteClass(e.id, setInfo, setStaticInfo)
                        }
                        className="button-table rem"
                      >
                        حذف
                      </button>
                      <button
                        className="button-table"
                        onClick={() => {
                          setId(e.id);
                          setOpenSettings(true);
                        }}
                      >
                        تنظیمات کلاس
                      </button>
                      <Dialog
                        open={openSettings}
                        onClose={() => {
                          setOpenSettings(false);
                        }}
                      >
                        <DialogTitle
                          sx={{ textAlign: "right", fontFamily: "vazir" }}
                        >
                          تنظیمات
                        </DialogTitle>
                        <ClassSettings
                          class_id={id}
                          setOpenSettings={setOpenSettings}
                        />
                      </Dialog>
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
        </table>
      </Wrapper>
    </>
  );
};

export default CreateClass;
