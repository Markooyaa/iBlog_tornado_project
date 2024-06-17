import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddPost from './pages/AddPost.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import content from './pages/Content'
import ImgSection from './components/ImgSection.jsx'
import Subtitle from './components/ContentTitle.jsx'
import MainPart from './components/MainPart.jsx'
import MainPostButton from './components/MainPostButton.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    errorElement: <Note />,
    children: [
      {
        path: "/",
        element: <Content />,
        element: <ImgSection />,
        element: <Subtitle />,
        element: <MainPart />,
        element: <PostButton />,
        element: <MainPostButton />
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
