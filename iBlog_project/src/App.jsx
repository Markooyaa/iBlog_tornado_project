import BlogLayout from "./pages/BlogLayout";
import CategoryDetailComponent from "./components/CategoryDetailComponent";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { menus } from "./data/data";
import { LoginPage } from "./pages/LoginPage";
import { CreateAccount, CreateAccount2 } from "./pages/CreateAccount";
import { ChangePassword, ChangePassword2, ChangePassword3 } from "./pages/ChangePassword";
import PostDetailComponent from "./components/PostDetailComponent";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/postDetail/:id",
        element: <PostDetailComponent />
      },
      {
        path: "/:category/:id",
        element: <CategoryDetailComponent />
      
      }

    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/createAccount_Page2",
    element: <CreateAccount2 />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
  {
    path: "/changePassword_Page2",
    element: <ChangePassword2 />,
  },
  {
    path: "/changePassword_Page3",
    element: <ChangePassword3 />,
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


