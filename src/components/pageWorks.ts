import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageAboutMe.style";

@customElement("page-works")
export class PageWorks extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="works">
          <page-title alignRight="{true}">Works</page-title>
        </page-container>
    `;
  }
}
