'use strict';

/**
 * `reducedDistance`
 * Calculate new coordinates in a 3D space for point "i" in order
 * to get closer to point "j" reducing the distance between the two points by "r" amount.
 * @param {array} i - Array of 3 numbers for the coordinates x, y, z of the source point.
 * @param {array} j - Array of 3 numbers for the coordicates x, y, z of the target point.
 * @param {number} r - Number by which the distance between i and j needs to be reduced.
 * @example <caption>Example usage of reducedDistance</caption>
 * const attackingNpcPosition = [45, 23, -65];
 * const playerPosition = [34, 0, -10];
 * const howMuchCloser = 5;
 * const attackingNpcNextPosition = reducedDistance(attackingNpcPosition, playerPosition, howMuchCloser);
 * @returns {array} Array of coordinates the i position should get to in order to get closer to j.
 */
const reducedDistance = (i, j, r) => {
  return [
    Math.floor(i[0] + ((j[0] - i[0]) * r)),
    Math.floor(i[1] + ((j[1] - i[1]) * r)),
    Math.floor(i[2] + ((j[2] - i[2]) * r))
  ];
};

module.exports = reducedDistance;
