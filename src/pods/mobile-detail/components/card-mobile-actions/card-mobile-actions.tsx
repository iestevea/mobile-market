import {
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { MobileVm } from "../../mobile-detail.vm";
import DeleteIcon from "@material-ui/icons/Delete";
import * as classes from "./card-mobile-actions.styles";
import {
  COLOR_OPTIONS,
  STORAGE_OPTIONS,
  Option,
} from "pods/mobile-detail/constants/mobile-detail.constants";
import { addMobileToCart } from "pods/mobile-detail/api";
import { ShoppingCartContext } from "core/context/shopping-cart.context";

interface Props {
  mobile: MobileVm;
}

export const CardMobileActions: React.FC<Props> = ({ mobile }) => {
  const [options, setOptions] = useState({
    color: undefined,
    storage: undefined,
  });

  const { list, setList } = useContext(ShoppingCartContext);

  const addToShoppingCart = async () => {
    try {
      await addMobileToCart(
        mobile.id,
        options.color,
        options.storage
      );
      setList([...list, mobile.id]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setOptions({ ...options, [name]: value });
  };

  return (
    <Card>
      <CardContent className={classes.root}>
        <div className="actions-row">
          <div className="actions-row__item">
            <InputLabel id="color">Color</InputLabel>
            <Select
              labelId="color"
              fullWidth
              name="color"
              value={options.color}
              onChange={handleChange}
              label="Color"
              variant="outlined"
            >
              {COLOR_OPTIONS.map((option: Option) => (
                <MenuItem key={option.value} value={option.value}>
                  <em>{option.label}</em>
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="actions-row__item">
            <InputLabel id="storage">Almacenamiento</InputLabel>
            <Select
              fullWidth
              labelId="storage"
              name="storage"
              value={options.storage}
              onChange={handleChange}
              label="Almacenamiento"
              variant="outlined"
            >
              {STORAGE_OPTIONS.map((option: Option) => (
                <MenuItem key={option.value} value={option.value}>
                  <em>{option.label}</em>
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="actions-row">
          <Button
            color="primary"
            variant="contained"
            size="medium"
            disabled={!options.color && !options.storage}
            onClick={addToShoppingCart}
          >
            Añadir a la cesta
          </Button>
          {/* <IconButton className="goback-button" onClick={deleteToShoppingCart}>
            <DeleteIcon color="primary" />
            <Typography
              className="goback-button__text"
              variant="button"
              color="primary"
              component="span"
            >
              Eliminar
            </Typography>
          </IconButton> */}
        </div>
      </CardContent>
    </Card>
  );
};
