import BlogLayout from "./pages/BlogLayout";
import CategoryDetailComponent from "./components/CategoryDetailComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./components/Content";
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
import OthersProfile from "./pages/OthersProfile";
import OthersProfilePage from "./pages/OthersProfile";
import MyPosts from "./pages/MyPosts";
import { Fullcategory } from "./components/FullCategory";
import { Layout } from "./pages/Layout";

const router = createBrowserRouter([
  { path: "/",
    element: <Layout />,
    children:[
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
          
          },
          {
            path:'/:category',
            element:<Fullcategory/>
          },
         
    
        ]
      },
      
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
    path: "/edit",
    element: <EditProfileMain />,
    children: [
      
    ],
  },
  {
    path: "/likedposts",
    element: <LikedPost />,
    
  },
  {
    path: "/othersprofile",
    element: <OthersProfilePage />
  },
  {
    path: "/myposts",
    element: <MyPosts />
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
