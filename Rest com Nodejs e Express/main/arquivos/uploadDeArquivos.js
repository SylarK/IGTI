const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImg) => {
  const tipo = path.extname(caminho)

  const tiposValidos = ['jpg', 'png', 'jpeg']
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

  if (tipoEhValido) {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImg(false, novoCaminho))
  } else {
    const erro = 'Tipo é inválido'
    console.log('Erro, tipo é inválido!')
    callbackImg(erro)
  }
}
