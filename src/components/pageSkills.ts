import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageAboutMe.style";

@customElement("page-skills")
export class PageSkills extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="skills">
          <page-title alignRight="{true}">Skills</page-title>
        </page-container>
    `;
  }
}
