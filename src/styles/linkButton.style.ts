import { css } from "lit";

export const styles = [
  css`
    .link-btn {
      margin: 8px 0;
      cursor: pointer;
      text-align: center;
    }

    .link-btn img {
      width: 20px;
      height: auto;
    }

    .link-btn:hover img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(321deg)
        brightness(101%) contrast(103%);
    }
    @media screen and (min-width: 768px) {
      .link-btn {
        margin: 15px 0;
      }
      .link-btn img {
        width: auto;
        height: auto;
      }
    }
  `,
];
