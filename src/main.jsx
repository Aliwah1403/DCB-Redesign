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
import Articles from "./pages/Articles page/Articles.jsx";
import SingleArticle from "./pages/Articles page/SingleArticle.jsx";
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
            <Articles />
          </>
        ),
      },
      {
        path: "/articles/:title",
        element: <SingleArticle />,
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
