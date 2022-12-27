import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { audioOnClick, scrollTo } from "./utils";
import { styles } from "../styles/mainNav.style";

@customElement("main-nav")
export class MainNav extends LitElement {
  static styles = styles;
  @property() condition = false;
  @property() activeItm = 'home';
  @property()
  list = [
    { icon: "home", link: "home", label: "Home" },
    { icon: "about", link: "about-me", label: "About Me" },
    { icon: "career", link: "career", label: "Career Experience" },
    { icon: "skills", link: "skills", label: "Skills" },
    { icon: "works", link: "works", label: "Works" },
    { icon: "chat-comment", link: "testimonials", label: "Testimonials" },
    { icon: "mail", link: "contact-me", label: "Contact Me" },
  ];

  render() {
    return html`
      <div class="main-nav-wrp">
        <div
          class="menu-toggle ${this.condition ? "menu-toggle-active" : ""}"
          id="menu-toggle"
          @click=${() => {
        this.condition = !this.condition;
        document.body.classList.toggle("menu-opened");
        audioOnClick();
      }}
        >
          <span></span>
        </div>

        <div class="nav-itm-list  ${this.condition ? "menu-list-active" : ""}">
          <div class="nav-overlay"></div>
          <div class="nav-itms">
            ${this.list.map(
        (itm, index) => html`<div class="nav-itm ${this.activeItm == itm.link ? 'active' : ''}" @click=${() => {
          this.condition = !this.condition; this.activeItm = itm.link;
          document.body.classList.toggle("menu-opened");
          audioOnClick();
          scrollTo(itm.link);
        }}>
                <img src="./assets/images/${itm.icon}.svg" alt="${itm.label}" />
                <span class="itm-lablel">${itm.label}</span>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28125 19.4063C9.02812 19.4063 8.85937 19.3219 8.69062 19.1531L3.62812 14.0906C3.29063 13.7531 3.29063 13.2469 3.62812 12.9094L8.69062 7.84688C9.02812 7.50937 9.53437 7.50937 9.87187 7.84688C10.2094 8.18438 10.2094 8.69062 9.87187 9.02812L5.4 13.5L9.87187 17.9719C10.2094 18.3094 10.2094 18.8156 9.87187 19.1531C9.70312 19.3219 9.53437 19.4063 9.28125 19.4063Z"
                    fill="white"
                  />
                  <path
                    d="M22.7812 14.3438L4.21875 14.3438C3.7125 14.3438 3.375 14.0063 3.375 13.5C3.375 12.9938 3.7125 12.6562 4.21875 12.6562L22.7812 12.6563C23.2875 12.6563 23.625 12.9938 23.625 13.5C23.625 14.0063 23.2875 14.3438 22.7812 14.3438Z"
                    fill="white"
                  />
                </svg>
              </div>`
      )}
          </div>
        </div>
      </div>
    `;
  }
}
