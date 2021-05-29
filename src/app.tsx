import { ShoppingCartProvider } from "core/context/shopping-cart.context";
import React from "react";
import { RouterComponent } from "./core/router";
import { ThemeProviderComponent } from "./core/theme";

export const App = () => {
  return (
    <ThemeProviderComponent>
      <ShoppingCartProvider>
        <RouterComponent />
      </ShoppingCartProvider>
    </ThemeProviderComponent>
  );
};
