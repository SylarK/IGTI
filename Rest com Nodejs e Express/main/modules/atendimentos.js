const connect = require('../config/customDB')
const axios = require('axios')
const moment = require('moment')
const { conexao } = require('../infra/tabelas')

class Atendimento {
  getAll(res) {
    const sql = `SELECT * FROM Atendimentos`

    connect.query(sql, (err, result) => {
      if (err) {
        console.log('Erro : ', err)
        res.status(400).send('Erro ao realizar consulta na rotina getAll')
      } else {
        res.status(200).json(result)
        console.log('Endpoint: getAll')
      }
    })
  }

  getId(params, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${params}`

    connect.query(sql, async (err, result) => {
      const atendimento = result[0]
      const cpf = atendimento.cliente
      if (err) {
        console.log('Erro : ', err)
        res.status(400).json(err)
      } else {
        const { data } = await axios.get(`http://localhost:8082/${cpf}`)
        atendimento.cliente = data

        res.status(200).json(atendimento)
        console.log('Endpoint: getID', params)
      }
    })
  }

  sendAtendimento(values, res) {
    const dataCriacao = moment(new Date()).format('YYYY-MM-DD')
    const data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD')

    const validaData = moment(data).isSameOrAfter(dataCriacao)
    const validaNome = values.cliente.length >= 5

    const validacoes = [
      {
        nome: 'data',
        valido: validaData,
        msg: 'Data deve ser maior ou igual a data atual.',
      },
      {
        nome: 'cliente',
        valido: validaNome,
        msg: 'Cliente deve ter pelo menos cinco caracteres.',
      },
    ]

    const erros = validacoes.filter((campo) => !campo.valido)

    const existemErros = erros.length > 0

    if (existemErros) {
      res.status(400).json(existemErros)
    } else {
      const sql = 'INSERT INTO Atendimentos SET ?'

      const atendimentoDatado = { ...values, dataCriacao, data }

      conexao.query(sql, atendimentoDatado, (err, results) => {
        if (err) {
          res.status(400).json(err)
        } else {
          res.status(201).json(results)
        }
      })
    }
  }

  changeAtendimento(id, values, res) {
    if (values.data) {
      values.data = moment(values.data, 'DD/MM/YYYY').format(
        'YYYY-MM-DD HH:MM:SS'
      )
    }

    const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

    connect.query(sql, [values, id], (err, results) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(results)
      }
    })
  }

  deletar(id, res) {
    const sql = 'DELETE FROM Atendimentos WHERE id = ?'

    connect.query(sql, id, (err, results) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({ id })
      }
    })
  }
}

module.exports = new Atendimento()
