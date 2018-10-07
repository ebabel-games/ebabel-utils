
const randomList = require('../src/random-list');

test('randomList returns an object with 2 empty arrays when the input is missing', () => {
  const result = randomList();
  expect(result.list).toEqual([]);
  expect(result.rest).toEqual([]);
});

test('randomList standard input', () => {
  const input = ['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'];
  const result = randomList(input);
  expect(result.list!=[]).toBe(true);
  expect(result.rest!=[]).toBe(true);
});

test('input.source randomList standard input with input.max 2', () => {
  const input = ['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'];
  const result = randomList(input,2);
  expect(result.list!=[]).toBe(true);
  expect(result.rest!=[]).toBe(true);
});


test('input.source randomList standard input with input.max 2', () => {
  const input = {source:['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'],max:2};
  const result = randomList(input);
  expect(result.list!=[]).toBe(true);
  expect(result.rest!=[]).toBe(true);
});

test('input.source randomList standard input with input.max 0', () => {
  const input = {source:['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'],max:0};
  const result = randomList(input);
  expect(result.list!=[]).toBe(true);
  expect(result.rest!=[]).toBe(true);
});

test('input.source randomList object input with input.max 0', () => {
  const input = {
    source: [
      { beast: 'orc' },
      { beast: 'orc' },
      { beast: 'orc' }
    ],
    max: 0
  };

  const result = randomList(input);
  expect(result.list!=[]).toBe(true);
  expect(result.rest!=[]).toBe(true);
});


test('randomList empty input list', () => {
  const input = [];
  const result = randomList(input);
  expect(result.list).toEqual([]);
  expect(result.rest).toEqual([]);
});