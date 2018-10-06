'use strict';

/**
 * `randomList`
 * Returns the subset of a list of x elements from a larger source list.
 * @param {object} input - Input properties: source and max.
 * @param {array} input.source - The source property is the array from which a max number of elements will be randomly selected.
 * @param {number} input.max - Number of elements that will be randomly selected from input.source
 * @returns {object} 2 arrays in an object: list and rest.
 */
const randomList = (input) => {
  if (!input) {
    return {
      list: [],
      rest: [],
    };
  }

  let {
    source,
    max,
  } = input;

  if (!source || source.length === 0) {
    return {
      list: [],
      rest: [],
    };
  }

  if (max === 0) {
    return {
      list: source,
      rest: [],
    };
  }

  // Process the source.
  const rest = source
    .slice(0)
    .map(item => {
      if (item instanceof Object) {
        return JSON.stringify(item);
      }
      return item;
    });

  // Start with an empty list that will be output.
  const list = [];

  for (let i = 0; i < max; i++) {
    // Pick a random element.
    const selection = rest[Math.floor(Math.random() * (rest.length - 1))];

    // Remove the random element from the source that will be output in the rest.
    rest.splice(rest.indexOf(selection), 1);

    // Add the random element to the list that will be output.
    list.push(selection);
  }

  // Output.
  return {
    list,
    rest,
  };
};

module.exports = randomList;
