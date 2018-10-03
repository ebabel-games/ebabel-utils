'use strict';

const randomPosOrNeg = require('./random-pos-or-neg');

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
