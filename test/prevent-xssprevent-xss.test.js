const preventXss = require('../src/prevent-xssprevent-xss');

test('preventXss transforms <script></script> tags into plain text', () => {
  const safe = '&lt;script&gt;&lt;/script&gt;';

  const result = preventXss('<script></script>');
  expect(result).toBe(safe);
});