/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsSearch } from '@cds/core/search';
import '@cds/core/search/register.js';

describe('cds-search', () => {
  let component: CdsSearch;
  let element: HTMLElement;
  let input: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-search>
        <label>search</label>
        <input type="search" />
        <cds-control-message>message test</cds-control-message>
      </cds-search>
    `);

    component = element.querySelector<CdsSearch>('cds-search');
    input = component.querySelector<HTMLElement>('input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should apply prefix padding for search icon', async () => {
    await componentIsStable(component);
    expect(input.getAttribute('style')).toBe(
      'padding-left: calc((24 / var(--cds-global-base)) * 1rem) !important; padding-right: calc((6 / var(--cds-global-base)) * 1rem) !important;'
    );
  });
});
