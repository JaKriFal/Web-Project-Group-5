import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Newproject = React.lazy(() => import("../pages/Newp"));
const Viewpage = React.lazy(() => import("../pages/View"));
const ManagePortfolio = React.lazy(() => import("../pages/ManagePortfolio"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.NEW, element: <Newproject /> },
  { path: PathConstants.VIEW, element: <Viewpage /> },
  { path: PathConstants.MANAGEPORTFOLIO, element: <ManagePortfolio /> },
];
export default routes;
