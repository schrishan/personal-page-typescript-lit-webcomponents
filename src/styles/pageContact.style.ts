import { css } from "lit";

export const styles = [
  css`
    .contact-content{
      position: relative;
      z-index: 8;
      color: #fff;
      width: 90%;
      margin: 25px auto 0px;
      text-align: center;
    }
    .animate-img {
    width: 275px;
    height: 275px;
    display: flex;
    margin: auto;
}
.contact-list {
    width: 245px;
    margin: auto;
}
.contact-itm svg{
  width:30px;
  height:auto;
  display:inline-block;
  vertical-align:middle;
  fill:#2196f3;
  stroke:#2196f3;
  margin:0 10px 0 0;
}
.contact-itm .itm-txt{
  display:inline-block;
  vertical-align:middle;
  font-size:18px;
  color:#2196f3;
}
.contact-itm {
  margin:0 0 15px;
}
@media screen and (min-width: 768px) {
  .contact-content {
    width: calc(100% - 75px);
    margin: 150px auto 0px 75px;
    font-size: 20px;
    padding: 0 30px 0 0;
    box-sizing: border-box;
  }
  .tst-content {
    display: flex;
    margin: 100px auto 0;
    z-index: 1;
    position: relative;
    width: 730px;
}
}

@media screen and (min-width: 1159px) {
  .contact-content {
    width: calc(100% - 75px);
    margin: 100px auto 0px 75px;
    font-size: 20px;
    display: inline-block;
    padding: 0px 30px 0px 0px;
  }
}
  `,
];
