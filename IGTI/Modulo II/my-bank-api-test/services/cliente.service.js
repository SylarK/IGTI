import ClientRepository from "../repositories/cliente.repository.js"

async function getAllClients() {
  return await ClientRepository.getAllClients();
}

async function getOneClient(idClient) {
  return await ClientRepository.getOneClient(idClient);
}

async function deleteClient(idClient) {
  return await ClientRepository.deleteClient(idClient);
}

async function insertClient(dataBody) {
  return await ClientRepository.insertClient(dataBody);
}

export default {
  getAllClients,
  getOneClient,
  deleteClient,
  insertClient
}