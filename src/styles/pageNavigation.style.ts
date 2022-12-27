import { css } from "lit";

export const styles = [
  css`
    .pg-nav-section {
      width: 52px;
      padding: 0px 10px;
      box-sizing: border-box;
      position: fixed;
      left: 0px;
      top: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      z-index: 55;
    }

    .click-sound {
      position: fixed;
      bottom: 8px;
      cursor: pointer;
    }
    .click-sound img{
      width:23px;
      height:auto;
    }

    .click-sound:hover img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(321deg)
        brightness(101%) contrast(103%);
    }
    .main-nav-wrp {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .nav-itms {
      position: absolute;
      right: 0;
      transform: translate(100%, 100%);
      top: 0;
    }

    @media screen and (min-width: 768px) {
      .pg-nav-section {
        border-right: 1px dashed #2196f3;
      }
      .click-sound img{
      width:auto;
    }
    }
  `,
];
