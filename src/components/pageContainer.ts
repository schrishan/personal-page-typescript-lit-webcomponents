import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageContainer.style";

@customElement("page-container")
export class PageContainer extends LitElement {
  static styles = styles;
  @property() noBackgroundVideo = false;
  @property() pageName = "";

  render() {
    return html`
      <div class="page-container ${this.noBackgroundVideo?'noBackgroundVideo':''}" id="page-${this.pageName}">
        <slot></slot>
      </div>
    `;
  }
}
