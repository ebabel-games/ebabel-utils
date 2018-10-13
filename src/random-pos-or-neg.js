'use strict';

const random = require('./random');


/**
 * `randomPosOrNeg`
 * Calculates a positive or negative random number.
 * @example <caption>Example usage of randomPosOrNeg</caption>
 * const spellFizzleEffect = randomPosOrNeg(16);
 * @param {number} max - Maximum value that can be generated.
 * @returns {number} Positive or negative number randomly generated.
 */
const randomPosOrNeg = (max) => (Math.random() < 0.5 ? -1 : 1) * random(max);

module.exports = randomPosOrNeg;
