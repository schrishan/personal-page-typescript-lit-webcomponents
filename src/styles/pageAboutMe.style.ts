import { css } from "lit";

export const styles = [
  css`
    .about-me-content {
      position: relative;
      z-index: 8;
      color: #fff;
      width: 90%;
      margin: 25px auto 0;
    }

    @media screen and (min-width: 768px) {
      .content-wrp {
        padding: 60px 0 0 0;
      }
      .about-me-content {
        width: calc(100% - 75px);
        margin: 25px auto 0px 75px;
        font-size: 20px;
        padding: 0 30px 0 0;
        box-sizing: border-box;
      }
    }

    @media screen and (min-width: 1159px) {
      .content-wrp {
        display: flex;
        align-items: center;
      }
      .about-me-content {
        width: 100%;
        margin: 25px auto 0px 75px;
        font-size: 20px;
        display: inline-block;
        padding: 0px 30px 0px 0px;
      }
    }
  `,
];
