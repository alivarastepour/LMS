import { Checkbox } from "@mui/material";
import { Wrapper } from "./Classes.styles";

const Classes = ({ classes }) => {
  return (
    // <>
    <Wrapper>
      {/* <div style={{ width: 900 }}> */}
      <table className="table1">
        <tbody>
          <tr>
            <td></td>
            <td>ردیف</td>
            <td>ارائه دهنده</td>
            <td>نام کلاس</td>
          </tr>
          {classes.map((w) => {
            return (
              <tr key={w.id} className="hover">
                <td>
                  <Checkbox />
                </td>
                <td>{w.id}</td>
                <td>{w.instructor}</td>
                <td>{w.className}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="button acc">ارسال درخواست</button>
      <button className="button">نمی‌خوام</button>
      {/* </div> */}
    </Wrapper>
    // </>
  );
};
export default Classes;
