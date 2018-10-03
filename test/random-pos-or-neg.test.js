'use strict';

const randomPosOrNeg = require('../src/random-pos-or-neg');

test('randomPosOrNeg returns a number', () => {
  const results = new Array(10).fill(0).map(() => randomPosOrNeg(12));
  results.map((result) => {
    expect(!isNaN(result)).toBe(true);
  });
});
