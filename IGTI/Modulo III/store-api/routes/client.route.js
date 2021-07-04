import express from 'express';
import ClienteController from '../controllers/client_controller.js';

const router = express.Router();

router 
    .post('/', ClienteController.createClient)
    .get('/', ClienteController.getClients)

export default router;