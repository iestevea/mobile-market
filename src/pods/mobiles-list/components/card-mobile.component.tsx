import React from "react";
import {
  Button,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import { routes } from "../../../core/router";
import { MobileVm } from "../mobiles-list.vm";

interface Props {
  mobile: MobileVm;
}

export const CardMobileComponent: React.FC<Props> = ({ mobile }) => {
  return (
    <div key={mobile.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={mobile.imgUrl} />
        </ListItemAvatar>
        <ListItemText
          primary="Información del móvil"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="subtitle2"
                color="textPrimary"
              >
                Marca: {mobile.brand}
              </Typography>
              <Typography
                component="span"
                variant="subtitle2"
                color="textPrimary"
              >
                Modelo: {mobile.model}
              </Typography>
              <Typography
                component="span"
                variant="subtitle2"
                color="textPrimary"
              >
                Precio: {mobile.price} €
              </Typography>
            </React.Fragment>
          }
        />
        <Button
          color="primary"
          size="medium"
          href={routes.detailMobile(mobile.id)}
        >
          Ir a detalle
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
