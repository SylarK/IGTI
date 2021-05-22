import { promises as fs } from 'fs'

async function init() {
  try {
    await fs.writeFile(
      'testWriteFile-04-index.js.txt',
      'Teste utilizando promises assíncronas com try catch.\n'
    )
    await fs.appendFile(
      'testWriteFile-04-index.js.txt',
      'Append texto em arquivo 04-index.js'
    )
    const data = await fs.readFile('testWriteFile-04-index.js.txt', 'utf-8')
    console.log(data)
  } catch (err) {
    console.log(err.message)
  }
}

init()
