import { css } from "@emotion/css"

export const root = css`
  .filters-container {
    width: 100%;
    display: flex;
    align-items:center;
    padding: 1rem;
    > * {
      margin-right: 2rem;
    }
  }
  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-template-rows: auto;
    grid-gap: 1rem;
    padding: 1rem 1rem;
  }
`