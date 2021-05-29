import { css } from "@emotion/css"

export const root = css`
  padding: 2rem 1rem;
  .actions-row { 
    width: 100%;
    display: flex;
    &:last-child {
      margin-top: 1.5rem;
    }
    &__item {
      flex-grow: 1;
      &:last-child {
        margin-left: 2rem;
      }
    }
  }
`