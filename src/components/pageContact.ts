import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageAboutMe.style";

@customElement("page-contact")
export class PageContact extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="contact-me">
          <page-title alignRight="{true}">Contact<br/>Me</page-title>
        </page-container>
    `;
  }
}
