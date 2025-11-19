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
import Home from "../components/Home/Home";
import NoticeAll from "../components/dashboard/noticeBoard/NoticeAll";
import AddNotice from "../components/dashboard/noticeBoard/AddNotice";
import About from "../components/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path:"/home",
        element: <Home />,
      },
      {
        path:"/about",
        element: <About />,
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
        path: "setting/security",
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
        path: "notice",
        element: <NoticeAll/>,
      },
      {
        path: "notice/add",
        element: <AddNotice/>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
