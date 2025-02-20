import { Route, Routes } from "react-router-dom";
import Items from "./items/items";
//Routes urls
import { ROUTES } from "../constants/routes";
//Components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/navbar";
import Checkout from "./checkout/checkout";
import AddItem from "./add-item/add-item";
import Home from "./home/home";
export function Router({}) {
  return (
    <Routes>
      <Route
        element={
          <>
            <Home />
          </>
        }
        path={ROUTES.home}
      />
      <Route
        element={
          <>
            <Navbar />
            <Items />
          </>
        }
        path={ROUTES.itemsPage}
      />
      <Route
        element={
          <>
            <Navbar />
            <Checkout />
          </>
        }
        path={ROUTES.checkoutPage}
      />
      <Route
        element={
          <>
            <Navbar />
            <AddItem />
          </>
        }
        path={ROUTES.additemPage}
      />
    </Routes>
  );
}
