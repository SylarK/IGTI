import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function getAllClients() {
  const data = await readFile(global.fileName);
  return data;
}

async function getOneClient(idClient) {
  const data = JSON.parse(await readFile(global.fileName));
  const returnToClient = data.accounts.find(
    account => account.id === parseInt(idClient)
  )

  return JSON.stringify(returnToClient);
}

async function deleteClient(idClient) {
  const data = JSON.parse(await readFile(global.fileName));
  data.accounts = data.accounts.filter(
    account => account.id !== parseInt(idClient)
  )

  await writeFile(global.fileName, JSON.stringify(data, null, 2));

  const returnToClient = `Client id: ${idClient} has been deleted.`;

  return returnToClient;
}

async function insertClient(dataBody) {

  const data = JSON.parse(await readFile(global.fileName));

  const account = {
    id: data.nextId++,
    name: dataBody.name,
    status: 'active',
    age: dataBody.age,
    cpf: dataBody.cpf
  };

  data.accounts.push(account);

  await writeFile(global.fileName, JSON.stringify(data, null, 2));

  const returnToClient = `Client has been inserted.`;

  return returnToClient;
}

export default {
  getAllClients,
  getOneClient,
  deleteClient,
  insertClient
}