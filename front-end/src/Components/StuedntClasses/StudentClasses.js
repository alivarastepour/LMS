import { Wrapper } from "./StudentClasses.styles";
import { useEffect, useState } from "react";
import StudentClassesHeader from "./StudentClasses.Header";
import useGet from "../../custom-hooks/useGet";

const StudentClasses = () => {
  const [state, setState] = useState(undefined);
  const schools = useGet(
    "http://localhost:8000/study/student/schools/",
    sessionStorage.getItem("token")
  );
  const classes = useGet(
    `http://localhost:8000/study/student/classes/${
      state ? state.school_id : ""
    }/`,
    sessionStorage.getItem("token")
  );
  useEffect(() => {
    if (schools && schools.data.length !== 0) {
      setState(schools.data[0]);
    } else {
      setState(null);
    }
  }, [schools]);
  return (
    <>
      <StudentClassesHeader
        state={state}
        setState={setState}
        schools={schools.data}
      />
      <Wrapper>
        {classes.data.length !== 0 &&
          classes.data.length &&
          classes.data.map((e) => {
            return (
              <div key={e.id} className="flex-item">
                <div className="title">نام کلاس:</div>
                <div className="school-name">{e.name}</div>
                <div className="title">ارائه دهنده:</div>
                <div className="school-teacher">{e.teacher}</div>
              </div>
            );
          })}
      </Wrapper>
    </>
  );
};
export default StudentClasses;
