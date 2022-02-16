/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class StepsPageHeader extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .navbar {
        width: 95%;
        margin: 0 auto;
        overflow: hidden;
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: -1px -2px 2px -2px rgba(197, 209, 227, 0.75);
      }

      .wrapper {
        width: 98%;
        padding: 5px 5px;
        overflow: hidden;
        margin: 0 auto;
      }

      h3 {
        float: left;
      }

      .add-step-container {
        float: right;
      }

      .image-container {
        display: inline-block;
      }

      img {
        width: 18px;
        height: 18px;
        position: relative;
        top: 4px;
      }

      p {
        font-size: 14px;
        display: inline-block;
        color: #423af1;
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
          <h3>Steps</h3>
          <div class="add-step-container">
            <div class="image-container">
              <img src="../././images/plus-icon.png" alt="plus icon" />
            </div>
            <p>Add Step</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('steps-page-header', StepsPageHeader);
