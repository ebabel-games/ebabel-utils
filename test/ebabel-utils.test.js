'use strict';

const { mockTHREE } = require('ebabel-mocks');
const ebabelUtils = require('../src/ebabel-utils.js');

let THREE;
let scene;  /* eslint no-unused-vars:0 */

beforeEach(() => {
  THREE = mockTHREE;
  scene = new THREE.Scene();
});

test('ebabelUtils returns something other than undefined.', () => {
  const result = ebabelUtils();
  expect(result !== undefined).toBe(true);
});
