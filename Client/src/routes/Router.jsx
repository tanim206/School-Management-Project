import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import Users from "../components/dashboard/users/Users";
import DashboardHome from "../components/dashboard/home/DashboardHome";
import Setting from "../components/dashboard/settings/Setting";
import Result from "../components/dashboard/results/Result";
import NoticeBoard from "../components/dashboard/noticeBoard/NoticeBoard";
import Profile from "../components/dashboard/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  // Dashboard Screen Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "setting",
        element: <Setting/>,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "notice-board",
        element: <NoticeBoard/>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
