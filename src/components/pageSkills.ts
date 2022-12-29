import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageSkills.style";

@customElement("page-skills")
export class PageSkills extends LitElement {
  static styles = styles;

  render() {
    return html`
        <page-container pageName="skills">
          <page-title alignRight="{true}">Skills</page-title>
          <page-titleIntro>Front-end development, <br/>Web development & Interface Design 
</page-titleIntro>
<div class="skills-content">
  <div class="skill-itm">
    <img src="../assets/images/front-end.svg"/>
    <div class="skill-set para">
      <div class="set-title">Front-end development</div>
      <ul>
      <li>Html</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React.js</li>
      <li>Next.js</li>
      <li>Vue.js</li>
      <li>TypeScript</li>
      <li>Angular</li>
      <li>Redux</li>
      <li>JQuery</li>
      <li>SCSS, Less and Stylus</li>
      </ul>
    </div>
  </div>

  <div class="skill-itm">
    <img src="../assets/images/cms.svg"/>
    <div class="skill-set para">
      <div class="set-title">Back-end development & CMS</div>
      <ul>
      <li>Node.js</li>
      <li>PHP</li>
      <li>MySQL</li>
      <li>GraphQL</li>
      <li>Express</li>
      <li>WordPress</li>
      <li>Shopify</li>
      </ul>
    </div>
  </div>

  <div class="skill-itm">
    <img src="../assets/images/design.svg"/>
    <div class="skill-set para">
      <div class="set-title">UI development and design</div>
      <ul>
      <li>Bootstrap</li>
      <li>Tailwind</li>
      <li>Figma</li>
      <li>InVision</li>
      <li>Adobe XD</li>
      <li>Illustrator</li>
      <li>Photoshop</li>
      </ul>
    </div>
  </div>

  <div class="skill-itm">
    <img src="../assets/images/tools.svg"/>
    <div class="skill-set para">
      <div class="set-title">Concepts, architectures and principles</div>
      <ul>
      <li>Web Components</li>
      <li>Accessibility</li>
      <li>Responsive Design</li>
      <li>Web Optimization</li>
      <li>Micro-frontend</li>
      <li>Monorepo</li>
      <li>SPA (Single-page application)</li>
      <li>Progressive Web Apps (PWAs)</li>
      <li>OOCSS</li>
      </ul>
    </div>
  </div>

</div>
        </page-container>
    `;
  }
}
