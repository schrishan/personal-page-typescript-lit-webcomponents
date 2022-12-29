import { css } from "lit";

export const styles = [
  css`
    .work-content {
      position: relative;
      z-index: 8;
      color: #fff;
      width: 90%;
      margin: 25px auto 0px;
      text-align: center;
    }
    .site-itm {
      width: 290px;
      margin: 0px 15px 30px;
      display: inline-block;
      transition:all 0.35s ease-in-out;
    }
    .site-itm:hover {
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      transform: scale(1.1, 1.1);
    }
    .site-itm img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      .work-content {
        width: calc(100% - 75px);
        margin: 100px auto 0px 75px;
        font-size: 20px;
        padding: 0 30px 0 0;
        box-sizing: border-box;
      }
    }

    @media screen and (min-width: 1159px) {
      .work-content {
        width: calc(100% - 75px);
        margin: 100px auto 0px 75px;
        font-size: 20px;
        display: inline-block;
        padding: 0px 30px 0px 0px;
      }
    }
  `,
];
