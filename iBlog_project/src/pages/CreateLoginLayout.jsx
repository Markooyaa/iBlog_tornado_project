import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { CreateAccount, CreateAccount2 } from "./CreateAccount";
import { ChangePassword, ChangePassword2, ChangePassword3 } from "./ChangePassword";

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
]);


export default function CreateLoginLayout() {

  return (
    <div>
      <RouterProvider router={router}>


      </RouterProvider>

    </div>
  )
}