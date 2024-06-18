

import {ChangePassword, ChangePassword2,ChangePassword3} from "./pages/ChangePassword"
import Layout from "./pages/CreateLoginLayout"
import { CreateAccount , CreateAccount2} from "./pages/CreateAccount"
import HomePage from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      }
    ]
  },{
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: "/createAccount",
    element:<div>registerPage</div>
  }
]);


function App() {

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App
