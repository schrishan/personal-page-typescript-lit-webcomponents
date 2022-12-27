import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageHome.style";
import { scrollToTop } from "./utils";

@customElement("page-home")
export class PageHome extends LitElement {
  static styles = styles;
  @property() tempValue: number = 1;

  render() {
    return html`
        <page-container pageName="home" noBackgroundVideo="{true}">
        <page-title>Home</page-title>
        <div class="my-intro">
          <h1 class="intro-title">
            Hi, I’m <span class="my-name">< Sadith /></span>
          </h1>
          <div class="my-pos">
            <div
              class="pos-title-1 pos-title ${this.tempValue === 1
        ? "fade"
        : ""}"
            >
            Frontend Developer
            </div>
            <div
              class="pos-title-2 pos-title ${this.tempValue === 2
        ? "fade"
        : ""}"
            >
            Full Stack Web Developer
            </div>
            <div
              class="pos-title-3 pos-title ${this.tempValue === 3
        ? "fade"
        : ""}"
            >
            UI Specialist
            </div>
          </div>
          <div class="my-memo">
            “ Productivity is never an accident. It is always a result of a
            commitment to excellence, intelligent planning and focused effort. “
          </div>
        </div>
        <div class="img-wrp">
          <img src="./assets/images/home-img.png" alt="Sadith Crishantha" />
        </div>
      </div>
      </page-container>
    `;
  }
  firstUpdated() {
    setTimeout(() => {
      scrollToTop();
    }, 1);
    setInterval(() => {
      this.tempValue === 3 ? (this.tempValue = 1) : ++this.tempValue;
    }, 2000);
  }
}
