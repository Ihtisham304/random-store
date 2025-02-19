import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { reducer } from "./reducer";

const Ctx = createContext({});

export function Provider({ children }) {
  const [data, dispatch] = useReducer(reducer, { auth: false, count: 0 });
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Ctx.Provider value={{ data, dispatch, cart, setCart }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCtx() {
  return useContext(Ctx);
}
