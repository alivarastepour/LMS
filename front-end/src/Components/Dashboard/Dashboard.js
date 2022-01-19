import {
  useState,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Wrapper } from "./Dashboard.styles";
import Spinner from "../Spinner/Spinner";
import AccessibilityIdentifier from "./AccessibilityIdentifier";

import { authContext } from "../../App";
import useGet from "../../custom-hooks/useGet";

const Profile = lazy(() => import("../Profile/Profile"));
const DashboardHeader = lazy(() => import("./Dashboard.header"));
const Footer = lazy(() => import("../Footer/Footer"));

const Dashboard = () => {
  const navigator = useNavigate();

  const nav = useCallback(() => navigator("/"), [navigator]);

  const { data } = useGet(
    "http://localhost:8000/auth/whoami/role/",
    sessionStorage.getItem("token")
  );

  const defaultPage = useParams().management;

  const [show, setShow] = useState(defaultPage !== "management");

  const { auth } = useContext(authContext);

  useEffect(() => {
    if (!auth) {
      nav();
    }
  }, [auth, nav]);

  return (
    <>
      <Wrapper>
        <Suspense fallback={<Spinner color={{ c: "white" }} />}>
          <DashboardHeader
            show={show}
            setShow={setShow}
            dashboradTitle={data}
          />
          {show ? <Profile /> : <AccessibilityIdentifier role={data.role} />}
        </Suspense>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
