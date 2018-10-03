'use strict';

const deepCopy = require('../src/deep-copy');

test('deepCopy makes a copy that does not change the original', () => {
  const original = { strength: 18, life: 120 };
  const copy = deepCopy(original);
  copy.life += 10;

  expect(copy.life).toBe(130);
  expect(original.life).toBe(120);
});
