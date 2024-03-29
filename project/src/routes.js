/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Rank from "views/Rank.js";
import StartETFS from "views/ETFS/ETFSstart";
import Setting from "views/Setting.js";
import Thema from "views/Thema.js";
import Community from "views/Community/Community";
import WCommunity from "views/Community/WriteCommunity";
import Login from "views/Login";
import Profile from "views/Profile";
import Signup from "views/Signup";
import ETFss from "views/ETFS/ETFS";
import BoardDetail from "views/Community/Communitydetail";
import BoardDetailEdit from "views/Community/CommunitydetailEdit";

export var navs = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/myetfs",
    name: "ETFS",
    icon: "nc-icon nc-diamond",
    component: <StartETFS />,
    layout: "/admin",
  },
  {
    path: "/thema",
    name: "HOT Thema",
    icon: "nc-icon nc-pin-3",
    component: <Thema />,
    layout: "/admin",
  },

  {
    path: "/community",
    name: "Community",
    icon: "nc-icon nc-single-02",
    component: <Community />,
    layout: "/admin",
  },

  {
    path: "/etf",
    name: "What's ETF",
    icon: "nc-icon nc-chart-bar-32",
    component: <Rank />,
    layout: "/admin",
  },
];

var routes = [
  {
    path: "/signup",
    name: "회원가입",
    icon: "nc-icon nc-settings-gear-65",
    component: <Signup />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/myetfs",
    name: "ETFS",
    icon: "nc-icon nc-diamond",
    component: <ETFss />,
    layout: "/admin",
  },
  {
    path: "/thema",
    name: "HOT Thema",
    icon: "nc-icon nc-pin-3",
    component: <Thema />,
    layout: "/admin",
  },
  {
    path: "/etf",
    name: "What's ETF",
    icon: "nc-icon nc-chart-bar-32",
    component: <Rank />,
    layout: "/admin",
  },

  {
    path: "/community",
    name: "Community",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
    component: <Community />,
  },

  {
    path: "/community/write",
    name: "WCommunity",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
    component: <WCommunity />,
  },

  {
    path: "/community/detail/:id",
    name: "DeCommunity",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
    component: <BoardDetail />,
  },

  {
    path: "/community/detail/:id/edit",
    name: "EditCommunity",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
    component: <BoardDetailEdit />,
  },

  {
    path: "/setting",
    name: "Setting",
    icon: "nc-icon nc-settings-gear-65",
    component: <Setting />,
    layout: "/admin",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-settings-gear-65",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-settings-gear-65",
    component: <Login />,
    layout: "/admin",
  },
];

export default routes;
