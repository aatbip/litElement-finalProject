/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './stepList-component';
import './form-component'; 

export class ContentComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .navbar {
        width: 95%;
        margin: 2px auto 0px;
        overflow: hidden;
        background-color: white;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .wrapper {
        width: 98%;
        padding: 5px 5px;
        overflow: hidden;
        margin: 0 auto;
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
      <div class="navbar">
        <div class="wrapper">
          <step-list-component></step-list-component>
          <form-component> </form-component>
        </div>
      </div>
    `;
  }
}

customElements.define('content-component', ContentComponent);
