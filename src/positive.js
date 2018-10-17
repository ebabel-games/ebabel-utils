'use strict';

/**
 * `positive`
 * Computes the positive rounded up value of the input.
 * @param {number} input - Number to be converted into positive.
 * @example <caption>Example usage of positive</caption>
 * const attack = 5;
 * const defense = 17;
 * const score = positive(attack - defense); 
 * @returns {number} Positive value of the input number.
 */
const positive = (input) =>  Math.ceil(Math.abs(input));

module.exports = positive;
