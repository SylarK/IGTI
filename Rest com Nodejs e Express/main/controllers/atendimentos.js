const Atendimentos = require('../modules/atendimentos');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('Tela principal'));
  app.get('/atendimentos', (req, res) => Atendimentos.getAll(res));
  app.get('/atendimentos/:id', (req, res) => {
    const id = req.params.id;
    Atendimentos.getId(id, res);
  });
  app.post('/atendimentos', (req, res) => {
    const values = req.body;

    Atendimentos.sendAtendimento(values, res);
  });
  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimentos.changeAtendimento(id, valores, res);
  });
  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Atendimentos.deletar(id, res);
  });
};
