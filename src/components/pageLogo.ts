import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageLogo.style";

@customElement("page-logo")
export class PageLogo extends LitElement {
  static styles = styles;

  render() {
    return html`
        <div class="logo" @click=${() => {window.scrollTo(0, 0);}}>
            <img src="./assets/images/logo.svg"/>
        </div>
    `;
  }
  firstUpdated() {
    window.addEventListener('scroll', () => {
      const element = document.getElementById("logo") as HTMLInputElement | null;
      if (window.scrollY > 1.5) {
        document.body.classList.add("fixed-top");
        element?.setAttribute("style", "opacity:1;");
      } else {
        element?.setAttribute("style", "opacity:0;");
      }
    });
  }
}
