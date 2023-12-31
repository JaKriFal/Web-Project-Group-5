import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Newproject = React.lazy(() => import("../pages/Newp"));
const Viewpage = React.lazy(() => import("../pages/View"));
const ManagePortfolio = React.lazy(() => import("../pages/ManagePortfolio"));
const JobPosting = React.lazy(() => import("../pages/JobPosting"));
const Jobs = React.lazy(() => import("../pages/Jobs"));
const LogIn = React.lazy(() => import("../pages/LogIn"));
const UserRegister = React.lazy(() => import("../pages/UserRegister"));
const Company = React.lazy(() => import("../pages/Company"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.NEW, element: <Newproject /> },
  { path: PathConstants.VIEW, element: <Viewpage /> },
  { path: PathConstants.MANAGEPORTFOLIO, element: <ManagePortfolio /> },
  { path: PathConstants.NEWJOB, element: <JobPosting /> },
  { path: PathConstants.JOBS, element: <Jobs /> },
  { path: PathConstants.REGISTER, element: <UserRegister /> },
  { path: PathConstants.LOGIN, element: <LogIn /> },
  { path: PathConstants.COMPANY, element: <Company /> },
];
export default routes;
