const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImg) => {
  const tipo = path.extname(caminho);
  const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

  const tiposValidos = ['jpg', 'png', 'jpeg'];
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1));

  if (tipoEhValido == -1) {
    console.log('Erro! Tipo de arquivo inválido.');
    res.status(400).send('Tipo de arquivo anexado e invalido.');
  } else {
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImg(novoCaminho));
  }
};
