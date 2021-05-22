import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('GET /test')
})

app.post('/', (req, res) => {
  const a = 3
  const b = 5
  const resultado = soma(a, b)
  res.send('Resultado : ' + resultado)
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

function soma(a, b) {
  return a + b
}
