import { HomePage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
};

export function Routes() {
  return <RouterProvider router={router()} />;
}
