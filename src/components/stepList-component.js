/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class StepListComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      img {
        width: 20px;
        height: 20px;
        position: relative;
        top: 5px;
      }

      .container {
        float: left;
        width: 30%;
        border-right: 1px solid #d1d1d1;
        min-height: 300px;
      }

      .steps {
        background-color: #ece8ff;
        border-left: 2px solid #5900ff;
        padding: 10px 0px;
      }

      p {
        display: inline-block;
        font-size: 12px;
        color: #5900ff;
        font-weight: bold; 
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
        <div class="steps">
          <img src="../././images/dots-six-thin.png" alt="six dots" />
          <p>Please tell me something you like</p>
        </div>
      </div>
    `;
  }
}

customElements.define('step-list-component', StepListComponent);
