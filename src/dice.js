'use strict';

const random = require('./random');

/**
 * `dice`
 * Throw 1 die.
 * @example <caption>Example usage of dice</caption>
 * const result = dice();
 * @returns {number} Return a random integer from 1 to 6.
 */

const dice = () => random(6);

module.exports = dice;
