'use strict';

/**
 * `countArrayElements`
 * Returns an object that counts how many times each element is present in a given array.
 * @param {array} input - Array where element occurences need to be counted.
 * // countArrayElements
 * @example <caption>Example usage of countArrayElements</caption>
 * const input = ['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'];
 * const result = countArrayElements(input);
 * expect(result['orc']).toBe(3);
 * expect(result['goblin']).toBe(1);
 * expect(result['elf']).toBe(2);
 * @returns {number} Return count of matching elements.
 */
const countArrayElements = (input) => {
  if (!Array.isArray(input)) {
    throw new Error('Missing array, so it is not possible to count members of that array.');
  }

  const result = {};
  
  input
    .sort()
    .reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map())
    .forEach((value, key) => { result[key] = value; });

  return result;
};

module.exports = countArrayElements;