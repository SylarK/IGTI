import { promises as fs } from 'fs';
import ClientService from '../services/cliente.service.js'

const { readFile, writeFile } = fs;

async function getAllClients(req, res, next) {
  try {
    logger.info("Endpoint: GET /clients");
    res.status(200).send(await ClientService.getAllClients());
  } catch (err) {
    next(err);
  }

}

async function getOneClient(req, res, next) {
  try {
    const idClient = req.params.id;
    logger.info(`Endpoint: GET /clients/:id - id:${idClient}`);
    res.status(200).send(await ClientService.getOneClient(idClient));
  } catch (err) {
    next(err);
  }
}

async function insertClient(req, res, next) {
  try {
    let dataBody = req.body;
    logger.info(`Endpoint: POST /clients`);
    res.status(201).send(await ClientService.insertClient(dataBody));
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    const idClient = req.params.id;
    logger.info(`Endpoint: DELETE /clients/:id - id:${idClient}`);
    res.status(200).send(await ClientService.deleteClient(idClient));
  }
  catch (err) {
    next(err);
  }
}

export default {
  getAllClients,
  getOneClient,
  insertClient,
  deleteClient
}