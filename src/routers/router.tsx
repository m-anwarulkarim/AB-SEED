import { createBrowserRouter } from "react-router";
import MainLayout from "../components/ui/layout/MainLayout";
import Error from "@/pages/Error";
import PopularProductMain from "@/pages/PopularProduct/PopularProductMain";
import allProductMain from "@/pages/allProdact/allProductMain";
import OrdeCartMain from "@/pages/orderCart/OrdeCartMain";
import NewOfferMain from "@/pages/NewOffer/NewOfferMain";
import NotificationMain from "@/pages/notification/NotificationMain";
import ProfileMain from "@/pages/profile/ProfileMain";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: PopularProductMain,
        index: true,
      },
      {
        path: "/all",
        Component: allProductMain,
      },

      {
        path: "/cart",
        Component: OrdeCartMain,
      },
      {
        path: "/offers",
        Component: NewOfferMain,
      },
      {
        path: "/notifications",
        Component: NotificationMain,
      },
      {
        path: "/profile",
        Component: ProfileMain,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
