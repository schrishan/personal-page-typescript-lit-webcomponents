import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageTitle.style";

@customElement("page-title")
export class PageTitle extends LitElement {
  static styles = styles;
  @property() alignRight=false;
  render() {
    return html`
      <div class="pg-title ${this.alignRight?'align-right':''}"><slot></slot></div>

    `;
  }
}
