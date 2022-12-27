import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageAboutMe.style";
import { PageTitleIntro } from "./pageTitleIntro";

@customElement("page-aboutme")
export class PageAboutMe extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="about-me"><page-title alignRight="{true}">About<br />Me</page-title>
          <div class="content-wrp">
            <page-titleintro>Developing with passion for Problem Solving.</page-titleintro>
            <div class="about-me-content">
            <p>Hello, it's me <b>Sadith Chrishantha.</b></p>

<p>I am a front-end and web developer who constantly seeks out innovative solutions to everyday problems.</p>

<p>I've been a part of industry for over ten years and within those years, I've honed my design and development skills which makes working with a team easier. I've also had the opportunity to serve as lead front-end developer for different projects.</p>

<p>Furthermore I am a highly directed and result-oriented professional; a dedicated, proactive team player, a hardworking, well disciplined, and self-motivated individual who enjoys taking on new challenges and is willing to learn more while working individually as well as in a team environment. </p>

<p>I'm still enthusiastically grabbing onto some other learnings I can integrate into the coding web in my head that support me to be a master in front-end & web development.</p>

<p>For whatever reason it is you are here, welcome...!</p>






            </div>
          </div>
        </page-container>
    `;
  }
}
