'use strict';

const positive = require('../src/positive');

test('positive transforms negative decimals into positive integers (rounded up)', () => {
  const result = positive(-3.141592653589793);
  expect(result).toBe(4);
});
