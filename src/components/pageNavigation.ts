import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { MainNav } from "./mainNav";
import { ContactNav } from "./contactNav";
import { styles } from "../styles/pageNavigation.style";
import { audioOnClick } from "./utils";

@customElement("page-navigation")
export class PageNavigation extends LitElement {
  static styles = styles;
  @property() audioMute = false;

  render() {
    return html`
      <div class="pg-nav-section">
        <main-nav></main-nav>
        <contact-nav></contact-nav>
        <div
          class="click-sound click-audio-on"
          @click=${() => {
            this.audioMute = !this.audioMute;
            this.audioMute ? document.body.classList.add('audio-muted'):document.body.classList.remove('audio-muted');
            audioOnClick();
          }}
        >
          <img src="./assets/images/sound_${this.audioMute?'mute':'max'}.svg" alt="clicked sound" />
        </div>
      </div>
    `;
  }
}
