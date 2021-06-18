module.exports = () => {
  const test = require('tape');
  const isLowerThan = require('../functions/isLowerThan');

  test('10 < 0', (t) => {
    t.assert(isLowerThan(0, 10) === false, "Retorno False.")
    t.end();
  })

  test('0 < 10', (t) => {
    t.assert(isLowerThan(10, 0) === true, "Retorno True.")
    t.end();
  })

  test('5 < 5', (t) => {
    t.assert(isLowerThan(5, 5) === false, "Retorno False.")
    t.end();
  })
}