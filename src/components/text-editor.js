/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import '@material/mwc-textfield';
import '@cwmr/paper-tags-input';

export class TextEditor extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        margin-top: 10px; 
      }

      p {
        color: #7f7273;
        font-size: 14px;
      }

      .top-container {
        background-color: #f8f8f8;
        padding: 5px;
        border: 1px solid #f0f0f0;
        margin-top: 5px; 
      }

      img {
        width: 14px;
        height: 14px;
        margin: 5px;
      }

      img:hover {
          opacity: 0.5; 
          cursor: pointer; 
      }

      textarea {
        width: 100%;
        height: 200px;
        border: 1px solid #f0f0f0;
        overflow: auto;
        resize: none; 
        padding: 5px; 
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
        <p>Description</p>
        <div class="wrapper">
          <div class="top-container">
            <img src="../././images/bold-icon.png" alt="bold icon" />
            <img src="../././images/italic-icon.png" alt="italic icon" />
            <img src="../././images/underline-icon.png" alt="underline icon" />
          </div>
          <div class="bottom-container">
            <textarea> </textarea>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('text-editor', TextEditor);
