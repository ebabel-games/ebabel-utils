'use strict';

const randomPosOrNeg = require('./random-pos-or-neg');

/**
 * `randomPosition`
 * Calculate new coordinates in a 3D space randomly to generate a new position.
 * @param {array} size - Array of 3 numbers for the width, height and depth, respectively.
 * @example <caption>Example usage of randomPosition</caption>
 * const spawnAreaSize = [3000, 2000, 3000];
 * const spawnPosition = randomPosition(spawnAreaSize);
 * @returns {array} Array of generated position coordinates.
 */

const randomPosition = (size = [6000, 6000, 6000]) => {
  const width = size[0];
  const height = size[1];
  const depth = size[2];

  return [
    Math.floor(randomPosOrNeg(width)),
    Math.floor(randomPosOrNeg(height)),
    Math.floor(randomPosOrNeg(depth))
  ];
};

module.exports = randomPosition;
