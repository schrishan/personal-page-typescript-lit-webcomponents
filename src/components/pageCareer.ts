import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageCareerExperience.style";
import { PageContainer } from "./pageContainer";
import { PageTitle } from "./pageTitle";

@customElement("page-career")
export class PageCareer extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="career-experience">
          <page-title alignRight="{true}">Career<br/>Experience</page-title>
        </page-container>
    `;
  }
}
