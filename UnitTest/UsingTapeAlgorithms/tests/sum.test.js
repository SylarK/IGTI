module.exports = function doIt() {

  const test = require('tape');
  const sum = require('../functions/sum.js');

  test('sum(5, 5) == 10', (t) => {
    t.assert(sum(5, 5) == 10, "Somou corretamente.")
    t.end();
  })

  test('sum(15, 5) == 20', (t) => {
    t.assert(sum(15, 5) == 20, "Somou corretamente.")
    t.end();
  })

  test('sum(-5, 5) == 0', (t) => {
    t.assert(sum(-5, 5) == 0, "Somou corretamente.")
    t.end();
  })

  test('sum(-5, -5) == -10', (t) => {
    t.assert(sum(-5, -5) == -10, "Somou corretamente.")
    t.end();
  })

}