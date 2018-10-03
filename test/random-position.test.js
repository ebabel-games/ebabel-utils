'use strict';

const randomPosition = require('../src/random-position');

test('randomPosition returns an array of three numbers', () => {
  const result = randomPosition();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(3);
  expect(typeof result[0]).toBe('number');
  expect(typeof result[1]).toBe('number');
  expect(typeof result[2]).toBe('number');
});

test('randomPosition returns coordinates within the input range', () => {
  const result = randomPosition([1, 1, 1]);
  expect(result[0] >= -1 && result[0] <= 1).toBe(true);
  expect(result[1] >= -1 && result[1] <= 1).toBe(true);
  expect(result[2] >= -1 && result[2] <= 1).toBe(true);
});
