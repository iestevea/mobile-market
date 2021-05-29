import React, { createContext, useState } from "react";
import { ShoppingCart } from "./shopping-cart.vm";

export const ShoppingCartContext = createContext<ShoppingCart>({
  list: [],
  setList: (list) => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [list, setList] = useState<string[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ list, setList}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
