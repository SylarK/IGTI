import PedidoService from '../services/pedidoService.js'

async function totalCliente(req, res, next) {
  const nomeCliente = req.body.cliente;

  if (!nomeCliente) {
    res.status(400).send({ error: "Cliente não informado" })
  }

  res.send(PedidoService.getTotalCliente(nomeCliente));

  res.end();


}

async function totalDados(req, res, next) {

  const response = await PedidoService.getAll();

  res.status(200).send(response);

}

export default {
  totalCliente,
  totalDados
}