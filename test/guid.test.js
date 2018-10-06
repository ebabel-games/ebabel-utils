const guid = require('../src/guid');

test('guid returns a string 36 characters long', () => {
  const result = guid();
  expect(result.length).toBe(36);
});