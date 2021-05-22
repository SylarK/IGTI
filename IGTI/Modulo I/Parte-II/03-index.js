// Utilizando promisses

import { promises as fs } from 'fs'

fs.writeFile(
  'testWriteFile-03-index.js.txt',
  'Teste escrito utilizando promisses no arquivo 03-index.js'
)
  .then(() => {
    fs.appendFile(
      'testWriteFile-02-index.js.txt',
      '\nAppend dentro da promisse'
    )
      .then(() => {
        fs.readFile('testWriteFile-02-index.js.txt', 'utf-8').then((resp) => {
          console.log(resp)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })
  .catch((err) => {
    console.log(err)
  })
