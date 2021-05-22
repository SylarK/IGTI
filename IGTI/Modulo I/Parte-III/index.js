import express from 'express'

const app = express()
app.use(express.json())

app.all('/testAll', (req, res) => {
  res.send('You are using: ' + req.method)
})

// ?
app.get('/teste?', (_, res) => {
  res.send('Pode-se acessar test ou teste.')
})

// +
app.get('/buz+', (_, res) => {
  res.send('Pode-se acessar com um numero ilimitado de z')
})

//*
app.get('/one*Blue', (req, res) => {
  res.send(req.params)
  res.send(req.path)
})

//()?
app.post('/test(ing)?', (req, res) => {
  res.send(req.path)
  //Torna-se opcional.
})

//parametros na rota
app.get('/testParam/:id', (req, res) => {
  res.send(req.params.id)
})

//expressões regulares
app.get(/.*Blue$/, (req, res) => {
  res.send('/.*Blue$/')
})

//querystring
app.get('/testQuery', (req, res) => {
  const data = req.query
  res.send(data)
})

//next
app.get(
  '/testMultipleHandlers',
  (_, res, next) => {
    console.log('Callback 1')
    next()
  },
  (_, res) => {
    res.send('Callback 2')
  }
)

//router
app
  .route('/testRoute')
  .get((req, res) => {
    res.send('Voce so pode utilizar get ou post nessa rota.')
  })
  .post((req, res) => {
    res.send('Voce so pode utilizar get ou post nessa rota.')
  })

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('API running on port 3000')
})
