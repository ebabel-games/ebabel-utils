'use strict';

const randomPosOrNeg = require('./random-pos-or-neg');

/**
 * `randomPosition`
 * Calculate new coordinates in a 3D space randomly to generate a new position.
 * @param {Array?} size - Array of 3 numbers for the width, height and depth, respectively. Default is [6000, 6000, 6000]. In default value of 6000, this covers coordinates from -3000 to +3000.
 * @param {Array?} exclusion - Array of 3 numbers for the area around origin that should be excluded from possible random positions. Default is [0, 0, 0]. The minimum values are either positive or negative so, for example, [3, 3, 3] would cover both -3 and +3.
 * @example <caption>Example usage of randomPosition</caption>
 * const spawnAreaSize = [3000, 2000, 3000];
 * const spawnPosition = randomPosition(spawnAreaSize);
 * @returns {Array} Array of generated position coordinates.
 */

const randomPosition = (size = [6000, 6000, 6000], exclusion = [0, 0, 0]) => {
  const width = size[0];
  const height = size[1];
  const depth = size[2];

  const minWidth = exclusion[0];
  const minHeight = exclusion[1];
  const minDepth = exclusion[2];

  if (minWidth > width || minHeight > height || minDepth > depth) {
    throw new Error('All exclusion coordinates need to be smaller than their corresponding size.');
  }

  return [
    Math.floor(randomPosOrNeg(width, minWidth * 2)),
    Math.floor(randomPosOrNeg(height, minHeight * 2)),
    Math.floor(randomPosOrNeg(depth, minDepth * 2)),
  ];
};

module.exports = randomPosition;
