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
    .para {
      background: radial-gradient(1000px at 50% 50%, rgba(0, 255, 255, 0.7), #0072CE, #1f1f1f);
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent;
      cursor: default;
      line-height: 1.47em;
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
