import { lazy, Suspense, useState } from "react";

import { Wrapper } from "./SchoolManagement.styles";
import Spinner from "../Spinner/Spinner";

import useGet from "../../custom-hooks/useGet";
import { host } from "../../Global/host";

const CreateSchool = lazy(() => import("../CreateSchool/CreateSchool"));
const CreateSchoolButton = lazy(() =>
  import("../CreateSchool.Button/CreateSchool.Button")
);
const SchoolStatus = lazy(() => import("../SchoolStatus/SchoolStatus"));
const SchoolInformation = lazy(() =>
  import("../SchoolInformation/SchoolInformation")
);

const SchoolManagement = () => {
  const URL = `${host}study/school/`;
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
};
export default SchoolManagement;
