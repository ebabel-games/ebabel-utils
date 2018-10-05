'use strict';

/**
 * `positive`
 * Computes the positive rounded up value of the input.
 * @param {number} input - Number to be converted into positive.
 * @returns {number} Positive value of the input number.
 */
const positive = (input) =>  Math.ceil(Math.abs(input));

module.exports = positive;
