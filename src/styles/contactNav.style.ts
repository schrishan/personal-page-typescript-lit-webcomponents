import { css } from "lit";

export const styles = [
  css`
    .contact-nav-list {
      position: fixed;
      bottom: 32px;
    }

    @media screen and (min-width: 768px) {
      .contact-nav-list {
        position: relative;
        bottom: auto;
      }
    }
  `,
];
