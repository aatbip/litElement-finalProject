/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './steps-list';

export class StepsNavigationBar extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        border-right: 1px solid #d1d1d1;
        min-height: 300px;
      }

      li {
        list-style-type: none;
      }

      ul > li {
        margin-top: 5px;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <ul>
          <li>
            <steps-list> </steps-list>
          </li>
          <li>
            <steps-list> </steps-list>
          </li>
          <li>
            <steps-list> </steps-list>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('steps-navigation-bar', StepsNavigationBar);
