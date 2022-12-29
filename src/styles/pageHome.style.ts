import { css } from "lit";

export const styles = [
  css`
    .img-wrp {
      width: 100%;
      position: absolute;
      right: 0px;
      top: 0;
      overflow: hidden;
      height: 100%;
      text-align: right;
    }


    .my-intro {
    width: 100%;
    text-align: center;
    margin-left: 0;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    z-index: 1;
    position: relative;
}

    .intro-title {
      font-weight: 400;
      font-size: 30px;
      margin: 0 0 25px;
    }

    .my-name {
      font-weight: bold;
      color: #2196f3;
    }
    .my-pos {
      font-size: 20px;
      font-weight: 100;
      height: 18px;
      width: 100%;
      position: relative;
    }
    .my-memo {
      font-size: 18px;
      font-weight: 100;
      width: 85%;
      margin: 30px 0px 0px;
    }
    .pos-title {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.65s ease-in-out;
    }
    .pos-title.fade {
      opacity: 1;
    }
    .img-wrp img {
      width: auto;
      height: 100%;
      margin: 0px 0px 0px -75%;
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
      .img-wrp img {
        margin: 0;
      }
      .intro-title {
        font-size: 60px;
      }
      .my-pos {
        font-size: 40px;
        height: 50px;
      }
      .my-memo {
        font-size: 25px;
        width: 76%;
      }
      .my-pos {
        font-size: 60px;
        height: 100px;
      }
      .my-intro {
      width: calc(100% - 55px);
      margin-left: 55px;
    }
    }
    @media screen and (min-width: 1160px) {
      .intro-title {
        font-size: 90px;
      }
    }
  `,
];
