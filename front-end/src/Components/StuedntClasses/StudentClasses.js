import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Wrapper } from "./StudentClasses.styles";
import StudentClassesHeader from "./StudentClasses.Header";

import useGet from "../../custom-hooks/useGet";

const StudentClasses = () => {
  const [state, setState] = useState(undefined);

  const schoolReqUrl = "http://localhost:8000/study/student/schools/";
  const classesReqUrl = `http://localhost:8000/study/student/classes/${
    state ? state.school_id : ""
  }/`;
  const TOKEN = sessionStorage.getItem("token");

  const navigator = useNavigate();
  const params = useParams();

  const nav = (classID) => {
    navigator(`/${params.id}/classes/${classID}`);
  };

  const schools = useGet(schoolReqUrl, TOKEN);

  const classes = useGet(classesReqUrl, TOKEN);

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
              <div key={e.id} className="flex-item" onClick={() => nav(e.id)}>
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
