'use strict';

const dice = require('./dice');

/**
 * `trait`
 * Throw 3 dices.
 * @example <caption>Example usage of dice</caption>
 * const stamina = trait();
 * @returns {number} Return a random integer from 3 to 18.
 */


const trait = () => dice() + dice() + dice();

module.exports = trait;
