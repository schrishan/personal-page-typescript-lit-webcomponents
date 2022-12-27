import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageAboutMe.style";

@customElement("page-testimonials")
export class PageTestimonials extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="testimonials">
          <page-title alignRight="{true}">Testimonials</page-title>
        </page-container>
    `;
  }
}
