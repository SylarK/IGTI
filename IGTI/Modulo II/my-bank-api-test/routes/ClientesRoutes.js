import express from 'express'
import ClienteController from '../controllers/cliente.controller.js';

const router = express.Router();

router
  .get('/', ClienteController.getAllClients)
  .get('/:id', ClienteController.getOneClient)
  .post('/', ClienteController.insertClient)
  .delete('/:id', ClienteController.deleteClient)

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
  res.status(400).send({ error: err.message });
});
export default router;