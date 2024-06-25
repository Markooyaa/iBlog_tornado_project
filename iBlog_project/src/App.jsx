import BlogLayout from "./pages/BlogLayout";
import CategoryDetailComponent from "./components/CategoryDetailComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./components/Content";
import { menus } from "./data/data";
import { LoginPage } from "./pages/LoginPage";
import { CreateAccount, CreateAccount2 } from "./pages/CreateAccount";
import { ChangePassword, ChangePassword2, ChangePassword3 } from "./pages/ChangePassword";
import PostDetailComponent from "./components/PostDetailComponent";
import HomePage from "./pages/HomePage";
import LikedPost from "./pages/LikedPost";
import MyProfileLayout from "./pages/MyProfileLayout";
import AddPost from "./pages/AddPost";
import EditProfile from "./components/EditProfile";
import EditProfileMain from "./components/EditProfileMain";
import EditProfilePass from "./components/EditProfilePass";

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
    path: "/profile",
    element: <MyProfileLayout />,
    children: [
      {
        path: "/profile",
        element: <Content />,
      },
      {
        path: "/profile/add",
        element: <AddPost />,
      },
      {
        path: "/profile/edit",
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "/edit",
    element: <EditProfileMain />,
    children: [
      
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
