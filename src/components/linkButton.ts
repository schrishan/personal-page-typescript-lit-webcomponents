import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/linkButton.style";

@customElement("link-button")
export class LinkButton extends LitElement {
  static styles = styles;
  @property({ type: String, reflect: true })
  icon = "";

  @property({ type: String, reflect: true })
  target = "_self";

  @property({ type: String, reflect: true })
  link = "";

  @query("img")
  private img?: HTMLImageElement;

  render() {
    return html`
      <div class="link-btn">
        <a class="preloader" href=${this.link} target=${this.target}>
          <img src=${this.icon} alt="icon" />
        </a>
      </div>
    `;
  }
}
