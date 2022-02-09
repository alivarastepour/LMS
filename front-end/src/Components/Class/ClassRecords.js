import useGet from "../../custom-hooks/useGet";

const ClassRecords = ({ classID }) => {
  const { data } = useGet(
    `http://localhost:8000/study/class/${classID}/recordings/`,
    sessionStorage.getItem("token")
  );
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>نام</td>
            <td>تاریخ</td>
            <td></td>
          </tr>
          {data &&
            data.length !== 0 &&
            data.length &&
            data.map((a) => {
              return (
                <tr className="hover" key={a.start_date}>
                  <td>{a.name}</td>
                  <td>{a.start_date}</td>
                  <td>
                    <a
                      href={a.url}
                      target={"_blank"}
                      rel="noreferrer"
                      className="record-link"
                    >
                      مشاهده ضبط
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ClassRecords;
