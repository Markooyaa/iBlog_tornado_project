import BlogLayout from "./pages/BlogLayout";
import CategoryDetailComponent from "./components/CategoryDetailComponent"
import HomePage from "./pages/HomePage"

import PostDetail from "./pages/PostDetail"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<BlogLayout/>,
    children:[
      {path: "/",
      element: <HomePage/>},
      {path: "/hobby",
      element: <CategoryDetailComponent category='Lifestyle' title="Hobby"/>},
      {path: "/travel",
      element: <CategoryDetailComponent category='Lifestyle' title="Travel"/>},
      {path: "/food",
      element: <CategoryDetailComponent category='Lifestyle' title="Food"/>},
      {path: "/home",
      element: <CategoryDetailComponent category='Lifestyle' title="Home"/>},
      {path: "/soccer",
      element: <CategoryDetailComponent category='Sport' title="Soccer"/>},
      {path: "/volleyball",
      element: <CategoryDetailComponent category='Sport' title="Volleyball"/>},
    ]
  },
  {
    path: "/login",
    element: <div>LoginPage</div>,
  },
  {
    path: "/register",
    element: <div>RegisterPage</div>,
  }
])

function App() {

  return (
    <>
     
      <RouterProvider router={router}/>
    </>
  )
}

export default App
