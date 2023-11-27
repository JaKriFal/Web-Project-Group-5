import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
// ...
import Newp from "./pages/Newp"
import Page404 from "./pages/Page404"

function App() {
  const router = createBrowserRouter([
    {
      
      element: <Layout />,
      errorElement: <Page404 />,
    
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/newproject",
          element: <Newp />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
