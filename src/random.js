'use strict';

/**
 * `random`
 * Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).
 * @param {Number?} max - the maximum to be returned, should be an integer. Default value is 100.
 * @param {Number?} min - the minimum to be returned, should be an integer. Default value is 0.
 * @returns {Number} Integer between min and max (inclusively)
 */
const random = (max = 100, min = 0) => {
  if (max === null || max === undefined) max = 100;
  if (min === null || min === undefined) min = 0;
  if (isNaN(max)) throw new Error('max is not a number');
  if (isNaN(min)) throw new Error('min is not a number');
  if (min > max) throw new Error('min cannot be greater than max');

  return Math.ceil(Math.random() * (max - min)) + min;
};

module.exports = random;