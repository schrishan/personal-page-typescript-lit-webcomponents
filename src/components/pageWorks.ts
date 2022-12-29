import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "../styles/pageWorks.style";

@customElement("page-works")
export class PageWorks extends LitElement {
  static styles = styles;
  list = [
    { site: "site-1", url: "https://www.serenahotels.com/" },
    { site: "site-2", url: "https://www.thistle.com/" },
    { site: "site-3", url: "https://www.guoman.com/" },
    { site: "site-4", url: "https://www.frasershospitality.com/en/" },
    { site: "site-5", url: "#" },
    { site: "site-6", url: "https://www.crownhotels.com.au/" },
    { site: "site-7", url: "#" },
  ];

  render() {
    return html`
      <page-container pageName="works">
        <page-title alignRight="{true}">Works</page-title>
        <page-titleintro>Work that I’ve done.</page-titleintro>
        <div class="work-content">
          ${this.list.map(
      (itm, index) => html`<div class="site-itm">
              <a href="${itm.url}" target="_blank">
                <img src="./assets/images/${itm.site}.png" />
              </a>
            </div> `
    )}
        </div>
      </page-container>
    `
  }
}
