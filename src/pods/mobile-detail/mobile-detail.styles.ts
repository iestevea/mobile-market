import { css } from "@emotion/css"

export const root = css`
  .goback-button {
    padding: 1rem;
    &__text {
      padding-left: 0.5rem;
    }
  }
  .mobile-content {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__image {
      margin: 3rem;
      img {
        max-width: 100%;
      }
    }
    &__info {
      flex-grow: 1;
      & > * {
        margin-top: 1rem;
      }
    }
  }
`