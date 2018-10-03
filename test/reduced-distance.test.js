'use strict';

const reducedDistance = require('../src/reduced-distance');

test('reducedDistance returns a new coordinate made of 3 numbers', () => {
  const i = [10, 20, 30];
  const j = [-45, 10, -70];
  const r = 10;
  const result = reducedDistance(i, j, r);

  expect(result.length).toBe(3);
  expect(!isNaN(result[0])).toBe(true);
  expect(!isNaN(result[1])).toBe(true);
  expect(!isNaN(result[2])).toBe(true);
});
