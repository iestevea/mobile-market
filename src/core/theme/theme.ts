import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "./theme.vm";
import merge from "lodash.merge"

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      main: '#61988E'
    },
    secondary: {
      main: '#493843'
    },
    success: {
      main: '#43a047',
    },
    warning: {
      main: '#ef4f4f',
    },
    info: {
      main: '#949cdf',
    },
    table: {
      row: {
        main: '#f6ecf0',
      },
    },
  }
} as Theme);