import { css } from "lit";

export const styles = [
  css`
    .skills-content {
      color: #fff;
      width: 90%;
      margin: 25px auto 0px;
      display: block;
      flex-direction: row;
      position:relative;
      z-index:1;
    }

    .skill-itm {
    background-color: #131313;
    box-shadow: 0 7px 8px 3px rgb(0 0 0 / 25%);
    padding: 20px;
    width: 100%;
    color:#fff;
    display:block;
    box-sizing: border-box;
    margin: 0 0 30px;
    border:1px solid #131313;
}
.skill-itm:hover{
  border-color:#2196f3;
}
.skill-set {
    margin: 0;
}
.skill-itm img{
  width: 50px;
    height: auto;
}
  .set-title {
    font-size: 20px;
    margin: 10px 0px 15px;
    font-weight: 600;
}
.skill-set ul {
    padding: 0 0 0 18px;
    margin: 0;
    column-count: 2;
}
.skill-set ul li{
    margin: 0 0 10px;
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
  .skills-content {
    width: calc(100% - 75px);
    margin: 150px auto 0px 75px;
    font-size: 20px;
    padding: 0 30px 0 0;
    box-sizing: border-box;
  }
  .skill-itm {
    display: flex;
}
.skill-itm img {
    width: 60px;
}
.skill-set {
    margin: 0px 0px 0px 25px;
}
.set-title {
    font-size: 30px;
}
}

@media screen and (min-width: 1159px) {
  .skills-content {
    width: calc(100% - 75px);
    margin: 100px auto 0px 75px;
    font-size: 20px;
    display: flex;
    padding: 0px 30px 0px 0px;
    flex-flow: wrap;
    align-items: normal;
    justify-content: center;
  }
  .skill-itm {
    width: 47%;
    display: flex;
    vertical-align: text-bottom;
    margin: 0px 15px 30px;
}
}
  `,
];
