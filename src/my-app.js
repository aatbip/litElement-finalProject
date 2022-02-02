/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './components/main-component';

export class MyApp extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */

  render() {
    return html`<main><main-component></main-component></main>`;
  }
}

customElements.define('my-app', MyApp);
