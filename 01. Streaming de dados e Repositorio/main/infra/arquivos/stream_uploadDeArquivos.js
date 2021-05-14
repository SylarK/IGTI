const fs = require('fs');

fs.createReadStream('../assets/groot.jpg')
  .pipe(fs.createWriteStream('../assets/groot-stream.jpg'))
  .on('finish', () => {
    console.log('Imagem foi escrita com sucesso. ');
  });
