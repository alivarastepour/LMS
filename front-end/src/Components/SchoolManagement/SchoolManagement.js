import { lazy, Suspense, useState } from "react";

import { Wrapper } from "./SchoolManagement.styles";
import Spinner from "../Spinner/Spinner";

import useGet from "../../custom-hooks/useGet";

const CreateSchool = lazy(() => import("../CreateSchool/CreateSchool"));
const CreateSchoolButton = lazy(() =>
  import("../CreateSchool.Button/CreateSchool.Button")
);
const SchoolStatus = lazy(() => import("../SchoolStatus/SchoolStatus"));
const SchoolInformation = lazy(() =>
  import("../SchoolInformation/SchoolInformation")
);

const SchoolManagement = () => {
  const URL = "http://localhost:8000/study/school/";
  const TOKEN = sessionStorage.getItem("token");

  const [showCreateSchool, setShowCreateSchool] = useState(false);

  const { data } = useGet(URL, TOKEN);
  return (
    <>
      <Suspense fallback={<Spinner color={{ c: "white" }} />}>
        <Wrapper>
          {data.has_requested && data.status !== "rejected" ? (
            data.status === "accepted" ? (
              <SchoolInformation />
            ) : (
              <SchoolStatus status={data.status} />
            )
          ) : data.status === "rejected" && !showCreateSchool ? (
            <SchoolStatus
              status={data.status}
              setShowCreateSchool={setShowCreateSchool}
            />
          ) : showCreateSchool ? (
            <CreateSchool />
          ) : (
            <CreateSchoolButton setShowCreateSchool={setShowCreateSchool} />
          )}
        </Wrapper>
      </Suspense>
    </>
  );
  // if (data.has_requested && data.status !== 'rejected') {
  //     if (data.status === 'accepted') {
  //         return <>
  //         <Wrapper>
  //             <SchoolInformation/>
  //         </Wrapper>
  //         </>
  //     }else{
  //         return <>
  //         <Wrapper>
  //         <SchoolStatus status={data.status} />
  //         </Wrapper>
  //         </>
  //     }
  // }else{
  //     if(data.status === 'rejected' && !showCreateSchool){
  //         return <>
  //         <Wrapper>
  //         <SchoolStatus status={data.status} setShowCreateSchool={setShowCreateSchool}/>
  //         </Wrapper>
  //         </>
  //     }
  //     if (showCreateSchool) {
  //         return <>
  //         <Wrapper>
  //         <CreateSchool/>
  //         </Wrapper>
  //         </>
  //     }else{
  //         return <>
  //         <Wrapper>
  //         <CreateSchoolButton setShowCreateSchool={setShowCreateSchool}/>
  //         </Wrapper>
  //         </>
  //     }
  // }
};
export default SchoolManagement;
