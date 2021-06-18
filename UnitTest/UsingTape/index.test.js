const test = require('tape');
const index = require('./index.js');
const palindromoTest = require('./tests/palindromo.test.js');

// test('Aplicar Desconto', (t) => {
//   t.assert(index.aplicarDesconto(10, 5) === 5, "Descontou corretamente")
//   t.end();
// })

// test('Aplicar Desconto Grande', (t) => {
//   t.assert(index.aplicarDesconto(5, 10) === 0, "Descontou corretamente")
//   t.end();
// })

palindromoTest.validatePalindromo();