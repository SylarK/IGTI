import express from 'express'
import carrosRouter from './carrosRouter.js'

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log(`Log: ${new Date()} - [${req.method}] - Path: ${req.path}`)
  next()
})

app.use('/carros', carrosRouter)

app.get('/', (req, res) => {
  res.end()
})

const port = 3000

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
