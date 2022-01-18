import { useState, lazy, Suspense, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Spinner from "../Spinner/Spinner";
import { authContext } from "../../App";
import AccessibilityIdentifier from "./AccessibilityIdentifier";

const Profile = lazy(() => import("../Profile/Profile"));
const DashboardHeader = lazy(() => import("./Dashboard.header"));

const Footer = lazy(() => import("../Footer/Footer"));

const Dashboard = () => {
  const nav = () => navigator("/");
  const role = "student";

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
          {show ? <Profile /> : <AccessibilityIdentifier role={role} />}
        </Suspense>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
