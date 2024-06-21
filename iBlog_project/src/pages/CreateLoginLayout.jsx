import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { CreateAccount, CreateAccount2 } from "./CreateAccount";
import {
  ChangePassword,
  ChangePassword2,
  ChangePassword3,
} from "./ChangePassword";

import MyProfileLayout from "./MyProfileLayout";
import AddPost from "./AddPost";
import Content from "../components/Content";

const router = createBrowserRouter([
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
  {
    path: "/profile",
    element: <MyProfileLayout />,
    children: [
      {
        path:"/profile",
        element: <Content />,
      },
      {
        path: "/profile/add",
        element: <AddPost />,
      },
      {},
    ]
  },
]);

export default function CreateLoginLayout() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
