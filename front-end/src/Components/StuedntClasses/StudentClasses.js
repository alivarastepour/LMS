import { Wrapper } from "./StudentClasses.styles";
import { useState } from "react";
import StudentClassesHeader from "./StudentClasses.Header";
const items = ["درس۱", "درس۲", "درس۳", "درس۴", "درس۵", "درس۶"];
const classes = ["مدرسه۱", "مدرسه۲", "مدرس۳", "مدرسه۴", "پالام پولوم پیلیش"];

const StudentClasses = () => {
  const [state, setState] = useState("");
  return (
    <>
      <StudentClassesHeader
        state={state}
        setState={setState}
        classes={classes}
      />
      <Wrapper>
        {items.map((e) => {
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
