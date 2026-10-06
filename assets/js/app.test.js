import test from 'node:test';
import assert from 'node:assert/strict';
import { BRANCHES } from './branches.js';
import { createBranchRenderer, restoreBranch } from './app.js';

test('rendering a branch updates every 2GIS destination', () => {
  const elements = new Map([
    ['name', {}], ['address', {}], ['phone', {}], ['booking', {}],
    ['reviews', {}], ['route', {}], ['map', {}], ['rating', {}],
    ['hours', {}], ['services', {}], ['masters', {}],
  ]);
  const renderer = createBranchRenderer(elements, { setItem() {} });

  renderer('nurbarber');

  assert.equal(elements.get('name').textContent, BRANCHES.nurbarber.name);
  assert.equal(elements.get('address').textContent, BRANCHES.nurbarber.address);
  assert.equal(elements.get('phone').href, `tel:${BRANCHES.nurbarber.phoneTel}`);
  assert.equal(elements.get('booking').href, BRANCHES.nurbarber.bookingUrl);
  assert.equal(elements.get('reviews').href, BRANCHES.nurbarber.reviewsUrl);
  assert.equal(elements.get('route').href, BRANCHES.nurbarber.routeUrl);
  assert.equal(elements.get('map').src, BRANCHES.nurbarber.mapUrl);
});

test('restoreBranch keeps a saved valid branch and falls back for an unknown value', () => {
  assert.equal(restoreBranch({ getItem: () => 'nurbarber' }), 'nurbarber');
  assert.equal(restoreBranch({ getItem: () => 'unknown' }), 'tonsor');
});
