import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageLogo.style";

@customElement("page-logo")
export class PageLogo extends LitElement {
  static styles = styles;

  render() {
    return html`
        <div class="logo">
            <img src="./assets/images/logo.svg"/>
        </div>
    `;
  }
}
