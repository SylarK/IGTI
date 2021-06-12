import express from 'express'
import axios from 'axios'

const url = 'http://localhost:3000/car-list.json'
const app = express()
app.use(express.json())
app.use(express.static('json'))

app.get('/marcas/maisModelos', exercicio1)
app.get('/marcas/menosModelos', exercicio2)
app.get('/marcas/listaMaisModelos/:id', exercicio3)
app.get('/marcas/listaMenosModelos/:id', exercicio4)
app.post('/marcas/listaModelos', exercicio5)

app.listen(3000, () => console.log('API Started'))

async function exercicio1(req, res) {
  //Marcas que mais possuem modelos
  try {
    const response = await axios.get(url)

    let resultado = { brand: null, 'models-length': 0 }

    for (let i = 0; i < response.data.length; i++) {
      if (Number(response.data[i].models.length) > resultado['models-length']) {
        resultado.brand = response.data[i].brand
        resultado['models-length'] = response.data[i].models.length
      }
    }

    // for (let i = 0; i < response.data.length; i++) {
    //   if (response.data[i].models.length == resultado['models-length']) {
    //     console.log(response.data[i].brand, response.data[i].models.length)
    //   }
    // }

    res.send(resultado)
  } catch (err) {
    console.log(err), res.send(err)
  }
}

async function exercicio2(req, res) {
  //Marcas que menos possuem modelos
  try {
    const response = await axios.get(url)
    let resultado = {
      brand: null,
      'models-length': response.data[0].models.length,
    }

    //Achar menor
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].models.length < resultado['models-length']) {
        resultado.brand = response.data[i].brand
        resultado['models-length'] = response.data[i].models.length
      }
    }

    // //Comparar menor
    // for (let i = 0; i < response.data.length; i++) {
    //   if (response.data[i].models.length == resultado['models-length']) {
    //     console.log(response.data[i].brand, response.data[i].models.length)
    //   }
    // }

    res.send(resultado)
  } catch (err) {
    res.send(err.message)
  }
}

async function exercicio3(req, res) {
  const qtd = req.params.id
  try {
    const response = await axios.get(url)
    let resultado = []
    for (let j = 0; j < qtd; j++) {
      let temp = { brand: null, 'models-length': 0 }

      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].models.length > temp['models-length']) {
          temp.brand = response.data[i].brand
          temp['models-length'] = response.data[i].models.length
          response.data[i].models = []
        }
      }

      resultado.push(temp)
    }
    //console.log(resultado)
    res.send(resultado)
  } catch (err) {
    res.status(400).send(err)
  }
}

async function exercicio4(req, res) {
  const qtd = req.params.id
  try {
    const response = await axios.get(url)
    let resultado = []
    for (let j = 0; j < qtd; j++) {
      let temp = { brand: null, 'models-length': 58 }
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].models.length < temp['models-length']) {
          temp['models-length'] = response.data[i].models.length
          temp['brand'] = response.data[i].brand
          response.data.splice(i, 1)
        }
      }
      resultado.push(temp)
      console.log(resultado)
    }
    //console.log(resultado)
    res.send(resultado)
  } catch (err) {
    res.status(400).send(err)
  }
}

async function exercicio5(req, res) {
  const modelo = req.body.brand
  try {
    const response = await axios.get(url)
    let { data } = response
    let resultado = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].brand.toUpperCase() == modelo.toUpperCase()) {
        resultado.push(data[i].models)
      }
    }
    res.send(resultado)
  } catch (err) {
    res.send(err.message)
  }
}
