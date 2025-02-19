import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const Ctx = createContext({});

export function Provider({ children }) {
  const initialState = { auth: false, count: 0, cart: [] };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>;
}

export function useCtx() {
  return useContext(Ctx);
}
