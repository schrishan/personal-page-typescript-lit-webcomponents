import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageTitleIntro.style";

@customElement("page-titleintro")
export class PageTitleIntro extends LitElement {
  static styles = styles;

  render() {
    return html`
        <div class="title-intro"><slot></slot></div>
    `;
  }
}
