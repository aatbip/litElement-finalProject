/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './steps-page-header';
import './steps-page-view';

export class MainComponent extends LitElement {
  static get styles() {
    return css`
      .body {
        width: 100%;
        background-color: #f4f6fc;
        padding-top: 10px;
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
      <div class="body">
        <steps-page-header></steps-page-header>
        <steps-page-view></steps-page-view>
      </div>
    `;
  }
}

customElements.define('main-component', MainComponent);

// horizontal line and the outer line of name and requirements - #CBD6EF
// bg body - #F4F6FC
// button:checked bg - #ece8ff
// fontbutton:checked - #5900ff
// line - vertical(separatess the button and the form) #e0e0e0

// background of tags - #f5f5f5

// outline of text editor - #d1d1d1
// background color of text editor buttons -#f8f8f8

// color of delete button and font - #ff0056
