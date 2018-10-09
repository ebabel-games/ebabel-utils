# ebabel-utils
[![Build Status](https://travis-ci.org/ebabel-games/ebabel-utils.svg?branch=master)](https://travis-ci.org/ebabel-games/ebabel-utils)

Small utility functions for game development.

## Module install and usage in your game

### Install
```
npm install --save ebabel-utils
```

### Usage
```
const {
  dice,
  trait,
  positive,
  randomPosOrNeg,
  reducedDistance,
  randomPosition,
  deepCopy,
  countArrayElements,
  distance,
  guid,
  Ido,
  preventXss,
  random,
  randomList,
} = require('ebabel-utils');

// dice
const result = dice();

// trait
const stamina = trait();

// positive
const attack = 5;
const defense = 17;
const score = positive(attack - defense);

// randomPosOrNeg
const spellFizzleEffect = randomPosOrNeg(16);

// reducedDistance
const attackingNpcPosition = [45, 23, -65];
const playerPosition = [34, 0, -10];
const howMuchCloser = 5;
const attackingNpcNextPosition = reducedDistance(attackingNpcPosition, playerPosition, howMuchCloser);

// randomPosition
const spawnAreaSize = [3000, 2000, 3000];
const spawnPosition = randomPosition(spawnAreaSize);

// deepCopy
const original = { strength: 12, life: 56 };
const copy = deepCopy(original);

// countArrayElements
const input = ['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'];
const result = countArrayElements(input);
expect(result['orc']).toBe(3);
expect(result['goblin']).toBe(1);
expect(result['elf']).toBe(2);


// distance
const i = [0, 0, 0];
const j = [10, 0, 0];
const result = distance(i, j);

// guid
const result = guid();

// Ido
const result = Ido();

// preventXss
const safe = '&lt;script&gt;&lt;/script&gt;';
const result = preventXss('<script></script>');
expect(result).toBe(safe);

// random
const max = 3;
const result = random(max);
expect(result >= 1).toBe(true);
expect(result <= 3).toBe(true);

// randomList
const input = {source:['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'],max:2};
const result = randomList(input);
expect(result.list.length).toBe(2);
expect(result.rest.length).toBe(4); 





```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork this repository on github.com
* git clone your forked repository.
* git checkout develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.
