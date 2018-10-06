'use strict';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

/**
 * `guid`
 * Returns a globally unique id string following the standard guid format.
 * @returns {string} Guid of 36 characters, including hyphens.
 */
const guid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

module.exports = guid;