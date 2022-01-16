import { useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Spinner from "../Spinner/Spinner";

const Profile = lazy(() => import("../Profile/Profile"));
const DashboardHeader = lazy(() => import("./Dashboard.header"));
const SchoolManagement = lazy(() =>
  import("../SchoolManagement/SchoolManagement")
);

const Dashboard = () => {
  const defaultPage = useParams().profile;

  const [show, setShow] = useState(defaultPage !== "management");

  return (
    <>
      <Wrapper>
        <Suspense fallback={<Spinner color={{ c: "white" }} />}>
          <DashboardHeader show={show} setShow={setShow} />
          {show ? <Profile /> : <SchoolManagement />}
        </Suspense>
      </Wrapper>
    </>
  );
};

export default Dashboard;
