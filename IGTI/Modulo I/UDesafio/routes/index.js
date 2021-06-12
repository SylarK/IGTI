import express from "express";
import PedidoController from '../controllers/pedidoController.js'

const router = express();

router
  .post('/totalcliente', PedidoController.totalCliente)
  .get('/todosDados', PedidoController.totalDados)


export default router;