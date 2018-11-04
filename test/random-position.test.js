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

test('randomPositions returns coordinates greater than the positive minimum or smaller than the negative minimum', () => {
  const result = randomPosition([10, 10, 10], [3, 3, 3]);
  expect(result[0] > 3 || result[0] < -3).toBe(true);
  expect(result[1] > 3 || result[1] < -3).toBe(true);
  expect(result[2] > 3 || result[2] < -3).toBe(true);
});

test('randomPositions throws an error when one min coordinate is bigger than the corresponding max', () => {
  expect(() => (
    randomPosition([2, 2, 2], [1, 3, 1])
  )).toThrowError('All exclusion coordinates need to be smaller than their corresponding size.');
});

test('randomPositions returns coordinates that are always the same value that is either positive or negative', () => {
  const result = randomPosition([2, 2, 2], [1, 1, 1]);
  expect(result[0] === 2 || result[0] === -2).toBe(true);
  expect(result[1] === 2 || result[1] === -2).toBe(true);
  expect(result[2] === 2 || result[2] === -2).toBe(true);
});

test('randomPositions returns 20,000 coordinates that are always the same value that is either positive or negative', () => {
  const result = new Array(20000)
    .fill(randomPosition([2, 2, 2], [1, 1, 1]))
    .filter(r => (r[0] === 2 || r[0] === -2)
      && (r[1] === 2 || r[1] === -2)
      && (r[2] === 2 || r[2] === -2));
  expect(result.length).toBe(20000);
});
