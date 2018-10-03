'use strict';

const trait = require('../src/trait');

test('trait returns a number from 3 to 18', () => {
  const result = trait();
  expect(result >= 3 && result <= 18).toBe(true);
});
