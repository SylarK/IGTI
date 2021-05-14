const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const movies = [
  { nome: 'Supremacia Bourne' },
  { nome: 'Batman Begins' },
  { nome: 'Sem remorso' },
  { nome: 'Spider man' },
]

app.use(bodyParser.json())

app.get('/api/filmes', (req, res) => {
  res.status(200).send(JSON.stringify(movies))
})

app.post('/api/filmes', (req, res) => {
  movies.push(req.body)

  res.status(201).send(JSON.stringify(movies))
})

app.listen(3001, () => {
  console.log('App Running at port 3001')
})
