/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';


export class FormComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        float: right;
        width: 70%;
      }

      .wrapper {
        float: right;
        width: 95%;
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
      <div class="container">
        <div class="wrapper">
          
        </div>
      </div>
    `;
  }
}

customElements.define('form-component', FormComponent);
