const fs = require('fs');

fs.readFile('../assets/groot.jpg', (err, buffer) => {
  console.log('Imagem em buffer.');
  console.log(buffer);

  fs.writeFile('../assets/groot-buffer.jpg', buffer, (err) => {
    console.log('Imagem de buffer foi escrita');
  });
});
