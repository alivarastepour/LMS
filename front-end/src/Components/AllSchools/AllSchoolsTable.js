import { status } from "./constant";
const AllSchoolsTable = ({ information }) => {
  return (
    <>
      {information && information.length ? (
        <table>
          <tbody>
            <tr>
              <td className="header">ردیف</td>
              <td className="header">شناسه</td>
              <td className="header">نام مدرسه</td>
              <td className="header">نام مدیر</td>
              <td className="header">وضعیت</td>
            </tr>
            {information.map((a) => {
              return (
                <tr className="hover" key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.school_id}</td>
                  <td>{a.name}</td>
                  <td>{a.manager}</td>
                  <td>{status(a.status, a.school_id)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>dali</div>
      )}
    </>
  );
};

export default AllSchoolsTable;
