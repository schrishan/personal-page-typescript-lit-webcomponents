import { css } from "lit";

export const styles = [
  css`
    .tst-content{
      position: relative;
      z-index: 8;
      color: #fff;
      width: 90%;
      margin: 25px auto 0px;
      text-align: center;
    }
    .tst-itm-wrp {
    text-align: left;
}
.tst-itm-wrp:nth-child(even) {
    text-align: right;
}
    .tst-itm{
    background-color: #131313;
    padding: 25px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #131313;
    box-shadow: 0 7px 8px 3px rgb(0 0 0 / 25%);
    width:100%;
    margin:0 0 25px;
}
.tst-itm img{
  order:1;
}
.tst-itm-wrp:nth-child(even) .tst-itm img{
  order:2;
}
.tst-itm p{
  margin: 10px 0 20px;
    font-weight: 100;
}
.tst-itm .person-name{
  color:#2196F3;
  font-weight:bold;
}
.tst-comment {
    text-align: left;
    padding: 0;
    order:2;
    margin: 20px 0 0;
}
.tst-itm-wrp .tst-itm:hover{
  border-color:#2196F3;
}
.tst-itm-wrp:nth-child(even) .tst-itm .tst-comment {
    text-align: right;
    order: 1;
    padding: 0;
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
  .tst-content {
    width: calc(100% - 75px);
    margin: 100px auto 0px 75px;
    font-size: 20px;
    padding: 0 30px 0 0;
    box-sizing: border-box;
  }
  .tst-itm{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tst-comment {
    padding: 0 0 0 25px;
  }
  .tst-itm-wrp:nth-child(even) .tst-itm .tst-comment {
    padding: 0px 25px 0px 0;
  }
  .tst-comment {
    margin: 0;
  }
  .tst-itm-wrp{
    padding:0 10% 0 0;
  }
  .tst-itm-wrp:nth-child(even){
    padding:0 0 0 10%;
  }
}

@media screen and (min-width: 1159px) {
  .tst-content {
    width: calc(100% - 75px);
    margin: 100px auto 0px 75px;
    font-size: 20px;
    display: inline-block;
    padding: 0px 30px 0px 0px;
  }
}
  `,
];
