import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../core/router";
import { theme } from "../../core/theme";
import { MobileVm } from "./mobile-detail.vm";

interface Props {
  mobile: MobileVm;
}

export const MobileDetailComponent: React.FC<Props> = ({ mobile }) => {
  const history = useHistory();
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: theme.spacing(7), height: theme.spacing(7) }}
              src={mobile.imgUrl}
            />
          }
          title={
            <React.Fragment>
              <Typography gutterBottom variant="h5" component="h2">
                {mobile.model}
              </Typography>
            </React.Fragment>
          }
        />
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
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(routes.mobiles)}
        >
          Volver
        </Button>
      </CardActions>
    </Card>
  );
};
