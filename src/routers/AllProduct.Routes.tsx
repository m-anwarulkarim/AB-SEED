import AllProductsPage from "@/pages/allProdact/AllProductsPage";
import CategoryPage from "@/pages/allProdact/CategoryPage";
import type { RouteObject } from "react-router";

const AllProductRoutes: RouteObject[] = [
  {
    path: "/all",
    Component: AllProductsPage,
  },
  {
    path: "/all/:category",
    Component: CategoryPage,
  },
];

export default AllProductRoutes;
