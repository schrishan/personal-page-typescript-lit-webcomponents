import { css } from "lit";

export const styles = [
  css`
    .pg-loader-wrp {
      background: #151515;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      flex-direction: column;
      z-index: 100;
      left: 0;
      top: 0;
    }
    .preloader {
      position: relative;
      width: 14rem;
      height: 3.31rem;
    }

    .preloader img {
      position: relative;
      width: 100%;
      z-index: 1;
    }
    .progress-bar {
      height: 0.1875rem;
      position: relative;
      margin: 0.625rem 0 0 0;
      display: block;
      border: 1px solid #2196f3;
      width: 14rem;
    }
    .animate-bar {
      background: #2196f3;
      width: 0;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      -webkit-animation: animateThis 5s ease-in;
      -webkit-animation-fill-mode: forwards;
    }
    @-webkit-keyframes animateThis {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .preloader {
        width: 21rem;
        height: 4.9rem;
      }
      .progress-bar {
        width: 21rem;
      }
    }

    @media screen and (min-width: 1024px) {
      .preloader {
        width: 28rem;
        height: 6.625rem;
      }
      .progress-bar {
        width: 28rem;
      }
    }
  `,
];
