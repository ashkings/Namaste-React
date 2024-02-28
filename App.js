import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Error from "./src/components/Error";
import useOnlineStatus from "./src/utils/useOnlineStatus";
import "./index.css";
import ContentLoader from "react-content-loader";

const Body = lazy(() => import("./src/components/Body"));
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return "You are not online. Please check your internet connection";

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<ContentLoader />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ContentLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ContentLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<ContentLoader />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
