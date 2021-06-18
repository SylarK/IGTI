const test = require('tap');
const palindromo = require('../algorithm/palindromo.js')

function validatePalindromo() {
  test('Verificar se é palindromo', (t) => {
    t.assert(palindromo.isPalindromo("ovo") === true, "Ovo é um palindromo")
    t.assert(palindromo.isPalindromo("Test set") === true, "Test set é um palindromo")
    t.assert(palindromo.isPalindromo("To idiot") === true, "To idiot é um palíndromo")
    t.assert(palindromo.isPalindromo("casa") === false, "Casa não é um palindromo.")
    t.end()
  })
}

module.exports = { validatePalindromo }