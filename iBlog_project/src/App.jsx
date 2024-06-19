import BlogLayout from "./pages/BlogLayout";
import HomePage from "./pages/HomePage";
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
        path: "/hobby",
        element: <CategoryDetailComponent category='Lifestyle' title="Hobby" />
      },
      {
        path: "/travel",
        element: <CategoryDetailComponent category='Lifestyle' title="Travel" />
      },
      {
        path: "/food",
        element: <CategoryDetailComponent category='Lifestyle' title="Food" />
      },
      {
        path: "/home",
        element: <CategoryDetailComponent category='Lifestyle' title="Home" />
      },
      {
        path: "/soccer",
        element: <CategoryDetailComponent category='Sport' title="Soccer" />
      },
      {
        path: "/volleyball",
        element: <CategoryDetailComponent category='Sport' title="Volleyball" />
      },
      {
        path: "/postDetail/:id",
        element: <PostDetailComponent />
      },

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


