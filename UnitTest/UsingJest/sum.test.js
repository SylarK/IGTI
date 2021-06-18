const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});

test('adds 0 + 2 to equal 2', () => {
  expect(sum(0, 2)).toBe(2);
});