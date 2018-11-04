'use strict';

const random = require('./random');


/**
 * `randomPosOrNeg`
 * Calculates a positive or negative random number.
 * @param {Number} max - Maximum value that can be generated.
 * @param {Number?} min - Minimum value that can be generated.
 * @example <caption>Example usage of randomPosOrNeg</caption>
 * const spellFizzleEffect = randomPosOrNeg(16);
 * @returns {Number} Positive or negative number randomly generated.
 */
const randomPosOrNeg = (max, min = 0) => (Math.random() < 0.5 ? -1 : 1) * random(max, min);

module.exports = randomPosOrNeg;
