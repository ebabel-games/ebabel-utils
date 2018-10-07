const countArrayElements = require('../src/count-array-elements');

test('simple array test', () => {
  const input = ['orc', 'goblin', 'orc', 'orc', 'elf', 'elf'];

  const result = countArrayElements(input);
  expect(result['orc']).toBe(3);
  expect(result['goblin']).toBe(1);
  expect(result['elf']).toBe(2);

});

test('missing input array', () => {
  expect(() => countArrayElements().toThrowError('Missing array, so it is not possible to count members of that array.'));
});

test('empty input ', () => {
  const input = null;
  expect(() => countArrayElements(input).toThrowError('Missing array, so it is not possible to count members of that array.'));
});
