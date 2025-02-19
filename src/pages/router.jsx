import { Route, Routes } from "react-router-dom";
import Items from "./items/items";
//Routes urls
import { ROUTES } from "../constants/routes";
//Components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/navbar";
import Checkout from "./checkout/checkout";
import AddItem from "./add-item/add-item";
export function Router({}) {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Items />
          </>
        }
        path={ROUTES.homePage}
      />
      <Route
        element={
          <>
            <Navbar />
            <Checkout />
          </>
        }
        path={ROUTES.checkout}
      />
      <Route
        element={
          <>
            <Navbar />
            <AddItem />
          </>
        }
        path={ROUTES.additem}
      />
    </Routes>
  );
}
