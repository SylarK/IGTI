//Servindo arquivos estáticos
import express from 'express'

const app = express()
app.use(express.json())
//app.use(express.static('public'))
app.use('/images?', express.static('public'))

const port = 3000

app.listen(port, () => console.log('API Started'))
