//TRATAMENTO DE ERROS
import express from 'express'

const app = express()
app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  throw new Error('Error message test')
})

app.post('/', async (req, res, next) => {
  try {
    throw new Error('Error message async')
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  console.log(err.message)
  next(err)
})

app.use((err, req, res, next) => {
  console.log('Error 1')
  res.status(400).send('Ocorreu um erro, tente novamente mais tarde.')
})

app.listen(port, () => {
  console.log('API started at port 3000')
})
