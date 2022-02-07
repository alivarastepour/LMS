import { Wrapper } from "./StudentClasses.styles";
import { useState } from "react";
import StudentClassesHeader from "./StudentClasses.Header";
import useGet from "../../custom-hooks/useGet";
// const items = ["درس۱", "درس۲", "درس۳", "درس۴", "درس۵", "درس۶"];
// const classes = [
//   { school_id: 1, name: "a" },
//   { school_id: 2, name: "b" },
//   { school_id: 3, name: "c" },
//   { school_id: 4, name: "d" },
//   { school_id: 5, name: "e" },
//   { school_id: 6, name: "f" },
// ];

const StudentClasses = () => {
  const [state, setState] = useState({});
  const { schools } = useGet(
    "http://localhost:8000/study/student/schools/",
    sessionStorage.getItem("token")
  );
  console.log(schools);
  const { classes } = useGet(
    `http://localhost:8000/study/student/classes/${state.school_id}/`,
    sessionStorage.getItem("token")
  );
  return (
    <>
      <StudentClassesHeader
        state={state}
        setState={setState}
        classes={classes}
      />
      <Wrapper>
        {schools &&
          schools.map((e) => {
            return (
              <div key={e} className="flex-item">
                {e}
              </div>
            );
          })}
      </Wrapper>
    </>
  );
};
export default StudentClasses;
