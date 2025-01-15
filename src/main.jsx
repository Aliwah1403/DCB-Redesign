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
import PageTitle from "./page-title.jsx";
import NotFound from "./not-found.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <PageTitle title="Home - DCB Consulting LLP" />
            <Homepage />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <PageTitle title="About Us - DCB Consulting LLP" />
            <About />
          </>
        ),
      },

      {
        path: "/articles",
        element: (
          <>
            <PageTitle title="News & Articles - DCB Consulting LLP" />
            <Blogs />
          </>
        ),
      },
      {
        path: "/articles/single-article",
        element: <SingleBlog />,
      },
    ],
  },

  {
    path: "/contact-us",
    element: (
      <>
        <PageTitle title="Get In Touch - DCB Consulting LLP" />
        <ContactUs />
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
