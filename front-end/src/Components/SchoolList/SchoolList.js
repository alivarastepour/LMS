import { Alert, Avatar, Button, Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import Classes from "./Classes";
import { findSchool } from "./classesHandler";
import { Wrapper } from "./SchoolList.styles";

const SchoolList = () => {
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  console.log(result);
  return (
    <>
      <Wrapper>
        <div className="flex-container">
          <div>
            <input
              placeholder="جست‌وجوی مدرسه بر اساس شناسه"
              autoFocus={true}
              className="input"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>
            <Button
              sx={{ fontFamily: "vazir", fontSize: "1.2rem" }}
              variant="contained"
              color="inherit"
              onClick={() => findSchool(searchValue, setResult)}
            >
              جست‌وجو
            </Button>
          </div>
        </div>
        {result && result.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <td></td>
                <td className="header">ردیف</td>
                <td className="header">شناسه</td>
                <td className="header">نام مدرسه</td>
                <td className="header">نام مدیر</td>
              </tr>
              {result.map((e) => {
                return (
                  <>
                    <tr
                      className="hover"
                      key={e.id}
                      onClick={() => {
                        setClasses(e.classes);
                        setShow(true);
                      }}
                    >
                      <td>
                        <Avatar src={e.image} sx={{ margin: "auto" }} />
                      </td>
                      <td>{e.id}</td>
                      <td>{e.school_id}</td>
                      <td>{e.name}</td>
                      <td>{e.manager}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Alert
            severity="info"
            sx={{
              direction: "rtl",
              fontFamily: "vazir",
              fontSize: "1.2rem",
              marginTop: 10,
            }}
          >
            اطلاعاتی برای نمایش وجود ندارد
          </Alert>
          // <div className="alert">اطلاعاتی برای نمایش وجود ندارد</div>
        )}
        <Dialog
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <DialogTitle sx={{ textAlign: "right" }}>لیست کلاس‌ها</DialogTitle>
          <Classes classes={classes} action={setShow} />
        </Dialog>
      </Wrapper>
    </>
  );
};
export default SchoolList;
