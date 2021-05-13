const Pet = require('../models/pets')

module.exports = (app) => {
  app.post('/pet', (req, res) => {
    const values = req.body
    Pet.sendPet(values, res)
    console.log('Endpoint: GET/pet')
  })
}
