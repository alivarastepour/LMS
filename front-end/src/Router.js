import { lazy } from "react";
import { useRoutes } from "react-router-dom";

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
              path: "/accounts/:id/:studentManagement/:info",
              element: <Background component={<StudentManagement />} />,
            },
          ],
        },
      ],
    },
  ]);
};
export default Router;
