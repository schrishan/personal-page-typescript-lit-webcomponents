import { css } from "lit";

export const styles = [
  css`
    .title-intro {
        color: rgb(255, 255, 255);
        z-index: 8;
        position: relative;
        width: 90%;
        text-align: center;
        margin: 0 auto 0;
        font-size: 25px;
        padding:40px 0 0 0;
        font-weight:500;
    }

    @media screen and (min-width: 768px) {
        .title-intro {
            font-size: 50px;
            width: calc(100% - 75px);
            text-align: left;
            padding: 0px;
            margin: 0px 0px 0px 75px;
            padding: 0 30px 0 0;
            box-sizing: border-box;
        }
    }
    @media screen and (min-width: 1159px) {
.title-intro {
    width: calc(100% - 75px);
    display: inline-block;
}
}

  `,
];
