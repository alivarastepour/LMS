import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import AcceptedSchools from "./Components/AcceptedSchools/AcceptedSchools";
import AdminManagement from "./Components/AdminManagement/AdminManagement";
import Class from "./Components/Class/Class";
import ClassManagement from "./Components/ClassManagement/ClassManagement";
import SchoolRequest from "./Components/SchoolRequest/SchoolRequest";

const MainPage = lazy(() => import("./Components/MainPage/MainPage"));
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const Background = lazy(() => import("./Components/Background/Background"));
const TableView = lazy(() => import("./Components/TableView/TableView"));
const CreateClass = lazy(() => import("./Components/ClassList/ClassList"));
const SchoolProfile = lazy(() =>
  import("./Components/SchoolProfile/SchoolProfile")
);
const StudentManagement = lazy(() =>
  import("./Components/StudentManagement/StudentManagement")
);

const Router = () => {
  return useRoutes([
    { path: "/", element: <Background component={<MainPage />} /> },
    {
      path: "/accounts/:id",
      element: <Background component={<Dashboard />} />,
      children: [
        {
          path: "/accounts/:id/:management",
          children: [
            {
              path: "/accounts/:id/:management/:info",
              element: <SchoolProfile />,
            },
            {
              path: "/accounts/:id/:management/:teachers",
              element: <TableView content="teacher" />,
            },
            {
              path: "/accounts/:id/:management/:students",
              element: <TableView content="student" />,
            },
            {
              path: "/accounts/:id/:management/:classes",
              element: <CreateClass />,
            },
          ],
        },
        {
          path: "/accounts/:id/:profile",
          element: <Background component={<Dashboard />} />,
        },
        {
          path: "/accounts/:id/:studentManagement",
          children: [
            {
              path: "/accounts/:id/:studentManagement/:schoolClasses",
              element: <Background component={<StudentManagement />} />,
            },
            {
              path: "/accounts/:id/:studentManagement/:info",
              element: <Background component={<StudentManagement />} />,
            },
          ],
        },
        {
          path: "accounts/:id/teacherManagement",
          children: [
            {
              path: "accounts/:id/teacherManagement/:schoolClasses",
              element: <div>school classes</div>,
            },
            {
              path: "accounts/:id/teacherManagement/:info",
              element: <div>info</div>,
            },
          ],
        },
        {
          path: "accounts/:id/admin",
          children: [
            {
              path: "accounts/:id/admin/:info",
              element: <Background component={<SchoolRequest />} />,
            },
            {
              path: "accounts/:id/admin/:schools",
              element: <Background component={<AcceptedSchools />} />,
            },
          ],
        },
      ],
    },
    {
      path: "/:studentID/classes/:classID",
      element: <Background component={<Class />} />,
    },
    {
      path: "/:studentID/classes-management/:classID",
      element: <Background component={<ClassManagement />} />,
    },
  ]);
};
export default Router;
