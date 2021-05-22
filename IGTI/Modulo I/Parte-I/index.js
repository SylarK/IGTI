let baseMultiplos = process.argv[2]
let rangeNumeros = process.argv[3]
let resultado = []

//calcular múltiplos de X em um range Y

for (let i = 0; i <= rangeNumeros; i++) {
  if (i % baseMultiplos == 0) {
    resultado.push(i)
  }
}

console.log(resultado)
