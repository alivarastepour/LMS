import { Button } from "@mui/material";
import { Wrapper } from "./Classes.styles";

const Classes = ({ classes }) => {
  return (
    // <>
    <Wrapper>
      {/* <div style={{ width: 900 }}> */}
      <table className="table1">
        <tbody>
          <tr>
            <td>ردیف</td>
            <td>ارائه دهنده</td>
            <td>نام کلاس</td>
            <td>وضعیت</td>
          </tr>
          {classes.map((w) => {
            return (
              <tr key={w.id} className="hover">
                <td>{w.id}</td>
                <td>{w.instructor}</td>
                <td>{w.className}</td>
                <td>
                  <Button sx={{ fontFamily: "vazir" }}>ثبت نام</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </Wrapper>
    // </>
  );
};
export default Classes;
