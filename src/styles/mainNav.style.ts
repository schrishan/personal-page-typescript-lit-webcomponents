import { css } from "lit";

export const styles = [
  css`
    .main-nav-wrp {
      position: absolute;
      left: 5px;
      top: 10px;
      cursor: pointer;
    }
    .menu-toggle {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 28px;
      z-index: 2;
    }
    .menu-toggle span {
      margin: 0 auto;
      position: relative;
      top: 12px;
      transition-duration: 0s;
      transition-delay: 0.2s;
      transition: background-color 0.3s;
    }
    .menu-toggle span:before,
    .menu-toggle span:after {
      position: absolute;
      content: "";
    }
    .menu-toggle span,
    .menu-toggle span:before,
    .menu-toggle span:after {
      width: 30px;
      height: 4px;
      background-color: #2196f3;
      display: block;
      opacity: 1;
    }
    .menu-toggle span:before {
      margin-top: -8px;
      transition-property: margin, transform;
      transition-duration: 0.2s;
    }
    .menu-toggle span:after {
      margin-top: 8px;
      transition-property: margin, transform;
      transition-duration: 0.2s;
    }

    .menu-toggle-active span {
      background-color: rgba(0, 0, 0, 0);
      transition: 0.3s background-color;
    }
    .menu-toggle-active span:before {
      margin-top: 0;
      transform: rotate(45deg);
      transition-delay: 0, 0.2s;
    }
    .menu-toggle-active span:after {
      margin-top: 0;
      transform: rotate(-45deg);
      transition-delay: 0, 0.2s;
    }
    .menu-toggle:hover span,
    .menu-toggle:hover span::after,
    .menu-toggle:hover span:before {
      background-color: #fff;
    }
    .menu-toggle.menu-toggle-active:hover span {
      background-color: transparent;
    }
    .nav-itm-list {
      width: 0;
      height: 0;
      background-color: #2196f3;
      border-radius: 50%;
      left: 0;
      position: fixed;
      display: flex;
      align-items: center;
      top: 0;
      z-index: 1;
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }
    .nav-itm-list .nav-overlay {
      left: 575px;
      top: 575px;
      background-color: #2196f3;
      border-radius: 50%;
      position: fixed;
      z-index: 1;
      opacity: 0;
      background-color: rgba(135, 202, 255, 0.35);
      transition: all 0.5s ease-in-out;
    }
    .menu-list-active.nav-itm-list {
      width: 550px;
      height: 550px;
      left: -100px;
      top: -100px;
      opacity: 1;
    }
    .menu-list-active.nav-itm-list .nav-overlay {
      opacity: 1;
      width: 575px;
      height: 575px;
      left: -160px;
      top: -70px;
      z-index: -1;
    }
    .nav-itms {
      margin: 0 0 0 -100px;
      transition: margin 0.5s ease-in-out;
      transition-delay: 0.25s;
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }
    .menu-list-active.nav-itm-list .nav-itms {
      opacity: 1;
      margin: 50px 0 0 200px;
    }

    .nav-itm {
      margin: 0 0 15px;
    }
    .nav-itm img {
      display: inline-block;
      vertical-align: middle;
      width:30px;
      height:auto;
      transition: all 0.5s ease-in-out;
    }
    .nav-itm .itm-lablel {
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px 0 10px;
      color: #fff;
      transition: all 0.5s ease-in-out;
    }
    .nav-itm svg {
      vertical-align: middle;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .nav-itm:not(.active):hover svg {
      animation-name: rightToLeft;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      opacity: 1;
    }
    .nav-itm.active .itm-lablel{
      color:#131313;
    }

    .nav-itm.active img{
      filter: invert(95%) sepia(5%) saturate(170%) hue-rotate(314deg) brightness(97%) contrast(91%);
    }
    @keyframes rightToLeft {
      0% {
        transform: translateX(10px);
      }
      25% {
        transform: translateX(-10px);
      }
      50% {
        transform: translateX(10px);
      }
      75% {
        transform: translateX(-10px);
      }
      100% {
        transform: translateX(10px);
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
    }

    @media screen and (min-width: 1024px) {
    }
  `,
];
