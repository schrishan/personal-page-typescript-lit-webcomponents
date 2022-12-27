import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/contactNav.style";

@customElement("contact-nav")
export class ContactNav extends LitElement {
  static styles = styles;

  @property()
  list = [
    { icon: "./assets/images/linkedin.svg", link: "https://www.linkedin.com/in/sadithc", target:"_blnk"},
    { icon: "./assets/images/git.svg", link: "https://github.com/schrishan", target:"_blnk" },
    { icon: "./assets/images/email.svg", link: "mailto:sadith@opterr.org", target:"_blnk" },
    { icon: "./assets/images/resume.svg", link: "#", target:"_blnk" }
  ];

  render() {
    return html`
      <div class="contact-nav-list">
        ${this.list.map(
          (itm, index) =>
            html`<link-button icon=${itm.icon} link=${itm.link} target=${itm.target}></link-button>`
        )}
      </div>
    `;
  }
}
