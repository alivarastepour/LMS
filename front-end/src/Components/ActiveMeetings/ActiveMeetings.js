import useGet from "../../custom-hooks/useGet";
import { Wrapper } from "./ActiveMeetings.styles";
const fakeData = [
  { meetingID: "sgdsa", meetingName: "gsrsg", participantCount: 21 },
  { meetingID: "sfsda", meetingName: "بشب", participantCount: 312 },
  { meetingID: "sghsda", meetingName: "بشسشسب", participantCount: 4 },
  { meetingID: "stra", meetingName: "لشسیق", participantCount: 6 },
  { meetingID: "vfsdsa", meetingName: "فاقاق", participantCount: 64 },
  { meetingID: "svfda", meetingName: "یبس", participantCount: 0 },
];
const ActiveMeetings = () => {
  const { data } = useGet(
    "http://localhost:8000/study/admin/meetings/",
    sessionStorage.getItem("token")
  );
  console.log(data);
  return (
    <>
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <td className="header">ردیف</td>
              <td className="header">شناسه جلسه</td>
              <td className="header">نام جلسه</td>
              <td className="header">تعداد شرکت کنندگان</td>
              <td className="header"></td>
            </tr>
            {
              //               data &&
              //   data.length &&
              //   data.length !== 0 &&
              fakeData.map((a, b) => {
                return (
                  <tr className="hover">
                    <td>{b}</td>
                    <td>{a.meetingID}</td>
                    <td>{a.meetingName}</td>
                    <td>{a.participantCount}</td>
                    <td>
                      <button className="button enter">ورود</button>
                      <button className="button end">خاتمه</button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

export default ActiveMeetings;
