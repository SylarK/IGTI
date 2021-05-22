import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//pergunta()
calcularNumerosMultiplos()

function pergunta() {
  rl.question('Digite um número : ', (numero) => {
    if (numero != 0) {
      pergunta()
    } else {
      rl.close()
    }
  })
}

function calcularNumerosMultiplos() {
  rl.question('Digite a base: ', (base) => {
    rl.question('Digite o range máximo: ', (range) => {
      const resultado = []
      for (let i = 0; i <= range; i++) {
        if (i % base == 0) {
          resultado.push(i)
        }
      }

      console.log(resultado)
      rl.close()
    })
  })
}
