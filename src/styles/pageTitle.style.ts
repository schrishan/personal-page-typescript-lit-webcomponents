import { css } from "lit";

export const styles = [
  css`
    .pg-title {
      font-size: 90px;
      font-weight: 900;
      font-family: Raleway;
      color: rgb(26, 26, 26);
      position: absolute;
      left: auto;
      top: 0px;
      text-align: right;
      line-height: 0.75;
      z-index: 1;
      right: 0px;
      width: 100%;
      margin:60px 0 0;
    }
    .pg-title.align-right {
      text-align: right;
      left: auto;
      right: 0;
      top: 0;
      white-space: normal;
    word-break: break-all;
    }
    @media screen and (min-width: 768px) {
      .pg-title {
        font-size: 250px;
        text-align: left;
        right: auto;
        left: 55px;
        top: 0;
        width: calc(100% - 55px);
        word-break: break-all;
        white-space: normal;
        box-sizing: border-box;
      }
    }
  `,
];
