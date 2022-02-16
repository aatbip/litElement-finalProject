/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './text-editor';

import '@material/mwc-textfield';
import '@cwmr/paper-tags-input';
import '@polymer/paper-button/paper-button.js';

export class StepsView extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      div.wrapper > * {
        margin-top: 15px;
      }

      mwc-textfield {
        width: 100%;
      }

      textarea {
        width: 100%;
        height: 80px;
        border: 1px solid #f0f0f0;
        overflow: auto;
        resize: none;
        padding: 10px;
      }

      .delete-button {
        border: 2px solid #ff0062;
        color: #ff0062;
        height: 30px;
        padding: 8px;
        float: right; 
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
          <mwc-textfield outlined label="Name *"> </mwc-textfield>

          <paper-tags-input label="Requirement" ></paper-tags-input>

          <text-editor></text-editor>

          <textarea placeholder="Metrics"></textarea>

          <mwc-textfield outlined label="Security Roles"> </mwc-textfield>

          <paper-button toggles raised class="delete-button">
            DELETE
          </paper-button>
        </div>
      </div>
    `;
  }
}

customElements.define('steps-view', StepsView);
