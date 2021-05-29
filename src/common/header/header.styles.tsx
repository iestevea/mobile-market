import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  background-color: ${theme.palette.primary.main};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  .shopping-cart-container {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 0.5rem;
    }
  }
`;
