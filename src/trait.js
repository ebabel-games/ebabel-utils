'use strict';

const dice = require('./dice');

/**
 * `trait`
 * Throw 3 dices.
 * @returns {number} Return a random integer from 3 to 18.
 */
const trait = () => dice() + dice() + dice();

module.export = trait;
