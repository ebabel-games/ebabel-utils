'use strict';

const random = require('ebabel-random');

/**
 * `dice`
 * Throw 1 die.
 * @returns {number} Return a random integer from 1 to 6.
 */
const dice = () => random(6);

module.exports = dice;
