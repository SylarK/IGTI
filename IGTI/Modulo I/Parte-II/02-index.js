//Utilizando com callbacks
import fs from 'fs'

fs.writeFile(
  'testWriteFile-02-index.js.txt',
  'Texto escrito utilizado Write File no 02-index.js\n',
  (err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Arquivo escrito com sucesso.')
      fs.appendFile(
        'testWriteFile-02-index.js.txt',
        'Linha escrita utilizando appendFile\n',
        (err) => {
          if (err) console.log(err)
        }
      )
      fs.readFile('testWriteFile-02-index.js.txt', 'utf-8', (err, data) => {
        if (err) {
          console.log(err.message)
        } else {
          console.log(data)
        }
      })
    }
  }
)
