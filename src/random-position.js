'use strict';

const randomPosOrNeg = require('./random-pos-or-neg');

/**
 * `randomPosition`
 * Calculate new coordinates in a 3D space randomly to generate a new position.
 * @param {Array?} size - Array of 3 numbers for the width, height and depth, respectively. Default is [6000, 6000, 6000].
 * @param {Array?} exclusion - Array of 3 numbers for the area around origin that should be excluded from possible random positions. Default is [0, 0, 0].
 * @example <caption>Example usage of randomPosition</caption>
 * const spawnAreaSize = [3000, 2000, 3000];
 * const spawnPosition = randomPosition(spawnAreaSize);
 * @returns {Array} Array of generated position coordinates.
 */

const randomPosition = (size = [6000, 6000, 6000], exclusion = [0, 0, 0]) => {
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
