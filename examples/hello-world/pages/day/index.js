import { css } from '@emotion/core'

export default () => (
  <div
    className={css`
      color: gray;
      background-color: LightGreen;
      font-size: 24px;
      &:hover {
        color: black;
      }
    `}
  >
    Hello Day 1
  </div>
)
