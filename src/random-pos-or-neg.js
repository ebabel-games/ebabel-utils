'use strict';

const { random } = require('ebabel-random');

const randomPosOrNeg = (max) => (Math.random() < 0.5 ? -1 : 1) * random(max);

module.export = randomPosOrNeg;
