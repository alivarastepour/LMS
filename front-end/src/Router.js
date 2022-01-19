import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const MainPage = lazy(() => import("./Components/MainPage/MainPage"));
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const Background = lazy(() => import("./Components/Background/Background"));

const Router = () => {
  return useRoutes([
    { path: "/", element: <Background component={<MainPage />} /> },
    {
      path: "/accounts/manager/:id",
      element: <Background component={<Dashboard />} />,
      children: [
        {
          path: "/accounts/manager/:id/:management",
          element: <Background component={<Dashboard />} />,
        },
        {
          path: "/accounts/manager/:id/:profile",
          element: <Background component={<Dashboard />} />,
        },
      ],
    },
  ]);
};
export default Router;
