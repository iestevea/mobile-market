import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MobileVm } from "../../mobile-detail.vm";

interface Props {
  mobile: MobileVm;
}

export const CardMobileDescription: React.FC<Props> = ({ mobile }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Marca: {mobile.battery}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Modelo: {mobile.model}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Precio: {mobile.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CPU: {mobile.cpu}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          RAM: {mobile.ram}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Sistema Operativo: {mobile.os}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Resolucion de pantalla: {mobile.displayResolution}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Bateria: {mobile.battery}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Camaras: {mobile.cameras}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Peso: {mobile.weight}
        </Typography>
      </CardContent>
    </Card>
  );
};
