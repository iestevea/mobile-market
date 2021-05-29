import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { routes } from "../../../core/router";
import { MobileVm } from "../mobiles-list.vm";
import { useHistory } from "react-router-dom";
import * as classes from "./card-mobiles.component.styles";

interface Props {
  mobile: MobileVm;
}

export const CardMobileComponent: React.FC<Props> = ({ mobile }) => {
  const history = useHistory();

  const goToMobileDetail = () => history.push(routes.detailMobile(mobile.id));

  return (
    <div key={mobile.id} className={classes.root} onClick={goToMobileDetail}>
      <Card className={classes.root}>
        <CardHeader
          title={`Movil de marca ${mobile.brand}`}
          subheader={`Precio: ${mobile.price}€`}
        />
        <img className="mobile-image" src={mobile.imgUrl} />
        <CardContent>
          <Typography component="span" variant="subtitle2" color="textPrimary">
            Marca: {mobile.brand}
          </Typography>
          <Typography component="span" variant="subtitle2" color="textPrimary">
            Modelo: {mobile.model}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
