const countArrayElements = require('../src/count-array-elements');

test('', () => {
  const input = ['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'];

  const result = countArrayElements(input);
  expect(result['orc']).toBe(3);
  expect(result['goblin']).toBe(1);
  expect(result['elf']).toBe(2);
});