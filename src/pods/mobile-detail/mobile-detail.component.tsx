import { Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../core/router";
import { CardMobileActions } from "./components/card-mobile-actions/card-mobile-actions";
import { CardMobileDescription } from "./components/card-mobile-description/card-mobile-description";
import { MobileVm } from "./mobile-detail.vm";
import * as classes from "./mobile-detail.styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

interface Props {
  mobile: MobileVm;
}

export const MobileDetailComponent: React.FC<Props> = ({ mobile }) => {
  const history = useHistory();
  const onGoBack = () => history.push(routes.mobiles);
  return (
    <div className={classes.root}>
      <IconButton className="goback-button" onClick={() => onGoBack()}>
        <ArrowBackIcon color="primary" />
        <Typography
          className="goback-button__text"
          variant="button"
          color="primary"
          component="span"
        >
          Volver
        </Typography>
      </IconButton>
      <div className="mobile-content">
        <div className="mobile-content__image">
          <img src={mobile.imgUrl} />
        </div>
        <div className="mobile-content__info">
          <CardMobileDescription mobile={mobile} />
          <CardMobileActions mobile={mobile} />
        </div>
      </div>
    </div>
  );
};
