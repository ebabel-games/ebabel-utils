'use strict';

/**
 * `deepCopy`
 * Make a deep copy of an object, i.e. breaks the pointers, so that updating the copy will not change the original.
 * @param {Object} input - Original object that needs to be copied.
 * @returns {Object} Copy of the input onject.
 */
const deepCopy = (input) => JSON.parse(JSON.stringify(input));

module.exports = deepCopy;
