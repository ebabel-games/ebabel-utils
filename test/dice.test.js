'use strict';

const dice = require('../src/dice');

test('dice returns a number from 1 to 6', () => {
  const result = dice();
  expect(result >= 1 && result <= 6).toBe(true);
});
