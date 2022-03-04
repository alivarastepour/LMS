import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Wrapper } from "./TeacherClasses.styles";
import TeacherClassesHeader from "./TeacherClasses.Header";

import useGet from "../../custom-hooks/useGet";
import Alert from "../Alert/Alert";
import { host } from "../../Global/host";

const TeacherClasses = () => {
  const [state, setState] = useState(undefined);

  const schoolReqUrl = `${host}study/teacher/schools/`;
  const classesReqUrl = `${host}study/teacher/classes/${state ? state : ""}/`;
  const TOKEN = sessionStorage.getItem("token");

  const navigator = useNavigate();
  const params = useParams();

  const nav = (classID) => {
    navigator(`/${params.id}/classes-management/${classID}`);
  };

  const schools = useGet(schoolReqUrl, TOKEN);
  const indicator = !!schools.data.length;

  const classes = useGet(classesReqUrl, TOKEN);

  useEffect(() => {
    if (schools && schools.data.length !== 0 && schools.data[0]) {
      setState(schools.data[0].school_id);
    } else {
      setState(null);
    }
  }, [indicator]);

  return (
    <>
      <TeacherClassesHeader
        state={state}
        setState={setState}
        schools={schools.data}
      />
      <Wrapper>
        {classes.data.length !== 0 && classes.data.length ? (
          <table>
            <tbody>
              <tr>
                <td className="header">نام کلاس</td>
              </tr>
              {classes.data.map((a) => {
                return (
                  <tr className="hover" key={a.id} onClick={() => nav(a.id)}>
                    <td>{a.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Alert />
        )}
      </Wrapper>
    </>
  );
};
export default TeacherClasses;
