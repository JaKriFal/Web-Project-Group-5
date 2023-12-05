import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Newproject = React.lazy(() => import("../pages/Newp"))
const Viewpage = React.lazy(() => import("../pages/View"))


const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.NEW, element: <Newproject /> },
    { path: PathConstants.VIEW, element: <Viewpage /> },
]
export default routes