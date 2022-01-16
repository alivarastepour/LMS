import { useState, lazy, Suspense, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Spinner from "../Spinner/Spinner";
import { authContext } from "../../App";

const Profile = lazy(() => import("../Profile/Profile"));
const DashboardHeader = lazy(() => import("./Dashboard.header"));
const SchoolManagement = lazy(() =>
  import("../SchoolManagement/SchoolManagement")
);
const Footer = lazy(() => import("../Footer/Footer"));

const Dashboard = () => {
  const nav = () => navigator("/");

  const defaultPage = useParams().profile;

  const [show, setShow] = useState(defaultPage !== "management");

  const { auth } = useContext(authContext);

  const navigator = useNavigate();

  useEffect(() => {
    if (!auth) {
      nav();
    }
  }, [auth, nav]);

  return (
    <>
      <Wrapper>
        <Suspense fallback={<Spinner color={{ c: "white" }} />}>
          <DashboardHeader show={show} setShow={setShow} />
          {show ? <Profile /> : <SchoolManagement />}
        </Suspense>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
