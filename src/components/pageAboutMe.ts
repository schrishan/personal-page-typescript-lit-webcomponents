import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageAboutMe.style";
import { PageTitleIntro } from "./pageTitleIntro";
//import { para } from "./utils";

@customElement("page-aboutme")
export class PageAboutMe extends LitElement {
  static styles = styles;
  async aa() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.addEventListener('click', this._handleClick);
  }
  _handleClick(e:any) {
    console.log('this.prop');
  }

  render() {
    return html`
      <page-container pageName="about-me"
        ><page-title alignRight="{true}">About<br />Me</page-title>
        <div class="content-wrp">
          <page-titleintro
            >Developing with passion for Problem Solving.</page-titleintro
          >
          <div class="about-me-content para">
            <p>Hello, it's me <b>Sadith Chrishantha.</b></p>

            <p class="para">
              I am a front-end and web developer who constantly seeks out
              innovative solutions to everyday problems.
            </p>

            <p class="para">
              I've been a part of industry for over ten years and within those
              years, I've honed my design and development skills which makes
              working with a team easier. I've also had the opportunity to serve
              as lead front-end developer for different projects.
            </p>

            <p class="para">
              Furthermore I am a highly directed and result-oriented
              professional; a dedicated, proactive team player, a hardworking,
              well disciplined, and self-motivated individual who enjoys taking
              on new challenges and is willing to learn more while working
              individually as well as in a team environment.
            </p>

            <p class="para">
              I'm still enthusiastically grabbing onto some other learnings I
              can integrate into the coding web in my head that support me to be
              a master in front-end & web development.
            </p>

            <p class="para">For whatever reason it is you are here, welcome...!</p>
          </div>
        </div>
      </page-container>
    `;
  }
  firstUpdated() {
    
  }

  // async para(id:any) {
  //   // Give the browser a chance to paint
  //   await new Promise((r) => setTimeout(r, 0));
  //   para(id)
  // }
}
// const   para = (id:any) => {
//   const el = document.getElementById(id);
//   el?.setAttribute("style", "opacity:0;");
// };