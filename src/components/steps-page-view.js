/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './steps-navigation-bar'; 
import './steps-view';

export class StepsPageView extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .steps-page-view {
        width: 95%;
        margin: 2px auto 0px;
        overflow: hidden;
        background-color: white;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .wrapper {
        display: flex; 
        justify-content: space-between; 
        width: 98%;
        padding: 5px 5px;
        overflow: hidden;
        margin: 0 auto;
      }

      steps-navigation-bar {
        width: 30%;
        margin-top: 10px; 
      }

      steps-view {
        width: 68%; 
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="steps-page-view">
        <div class="wrapper">
          <steps-navigation-bar></steps-navigation-bar>
          <steps-view></steps-view>
        </div>
      </div>
    `;
  }
}

customElements.define('steps-page-view', StepsPageView);
