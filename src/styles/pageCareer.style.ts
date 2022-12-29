import { css } from "lit";

export const styles = [
  css`
    .career-content {
      position: relative;
      z-index: 8;
      color: #fff;
      width: 90%;
      margin: 25px auto 0;
    }
    .exp-itm {
      border-left: 1px solid #fff;
      box-sizing: border-box;
      padding: 0 0 0 25px;
      position: relative;
    }
    .exp-itm-wrp {
      padding: 0 0 35px 0;
    }
    .exp-itm-wrp:last-child {
      padding: 0;
    }
    .exp-itm-date-location {
      font-style: italic;
      margin: 15px 0 0;
    display: block;
    font-size:14px;
    }
    .exp-itm p{
      margin: 15px 0px 0px;
    }
    .exp-itm-title{
      margin:0;
    }

    .exp-itm:after {
      content: "";
      width: 10px;
      height: 1px;
      background: #fff;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    .exp-itm:before {
      content: "";
      width: 10px;
      border-radius: 50%;
      height: 10px;
      background: rgb(255, 255, 255);
      display: block;
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 8px;
      margin: auto;
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
      .career-content {
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
      .career-content {
        width: 100%;
        margin: 25px auto 0px 75px;
        font-size: 20px;
        display: inline-block;
        padding: 0px 30px 0px 0px;
      }
    }
  `,
];
