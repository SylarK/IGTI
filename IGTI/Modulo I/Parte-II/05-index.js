import { promises as fs } from 'fs'

writeReadJson()

async function writeReadJson() {
  try {
    const arrayCarros = ['Gol', 'Palio', 'Uno']
    const obj = { carros: arrayCarros }

    await fs.writeFile('testWriteFileJSON-05.index.json', JSON.stringify(obj))
    const data = JSON.parse(
      await fs.readFile('testWriteFileJSON-05.index.json')
    )

    data.carros.push('Sandero')
    console.log(data)
    //console.log(JSON.parse(data))

    await fs.writeFile('testWriteFileJSON-05.index.json', JSON.stringify(data))
  } catch (err) {
    console.log(err.message)
  }
}
