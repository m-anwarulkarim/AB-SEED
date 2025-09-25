import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "@/pages/Error";
import PopularProductMain from "@/pages/PopularProduct/PopularProductMain";
import AllProductRoutes from "./AllProduct.Routes";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      ...AllProductRoutes,
      {
        Component: PopularProductMain,
        index: true,
      },

      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
