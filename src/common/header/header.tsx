import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ShoppingCartContext } from "core/context/shopping-cart.context";
import { routes } from "core/router";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import * as classes from "./header.styles";

interface Props {}

export const Header: React.FC<Props> = () => {
  const history = useHistory();
  const { list } = useContext(ShoppingCartContext);
  return (
    <div className={`${classes.root} header`}>
      <Button
        color="inherit"
        variant="text"
        size="medium"
        onClick={() => history.push(routes.root)}
      >
        MOBILE MARKET
      </Button>
      <div className="shopping-cart-container">
        <ShoppingCartIcon />
        <span>Productos: {list.length}</span>
      </div>
    </div>
  );
};
