const conexao = require('../config/customDB')
const uploadDeArquivo = require('../infra/arquivos/uploadDeArquivos')

class Pet {
  sendPet(pet, res) {
    const sql = 'INSERT INTO Pets SET ?'

    uploadDeArquivo(pet.imagem, pet.nome, (err, novoCaminho) => {
      if (err) {
        res.status(400).json({ err })
      } else {
        const novoPet = { nome: pet.nome, imagem: novoCaminho }

        conexao.query(sql, [novoPet], (err) => {
          if (err) {
            console.log('Erro ao executar a inserção de pet', err.sqlMessage)
            res.status(400).json(err)
          } else {
            res.status(200).send(novoPet)
          }
        })
      }
    })
  }
}

module.exports = new Pet()
