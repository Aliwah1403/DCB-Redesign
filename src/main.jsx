import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigation,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/About page/About.jsx";
import ContactUs from "./pages/Contact page/ContactUs.jsx";
import Blogs from "./pages/Blogs page/Blogs.jsx";
import SingleBlog from "./pages/Blogs page/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/articles",
        element: <Blogs />,
      },
      {
        path: "/articles/single-article",
        element: <SingleBlog />,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
