import { css } from "lit";

export const styles = [
  css`
    .logo {
      position: fixed;
      left: 0;
      top: 0;
      background: #151515;
      width: 100%;
      z-index: 20;
      padding: 9px 0 0 75px;
      padding: 9px 0px 5px 75px;
      border-bottom: 1px dashed rgb(33, 150, 243);
      transition: all 0.35s ease-in-out;
      cursor:pointer;
    }
    @media screen and (min-width: 768px) {
      .logo {
        border-bottom: none;
      }
    }
  `,
];
