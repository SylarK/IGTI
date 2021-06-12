import { promises as fs } from 'fs';

const { readFile } = fs;

async function getPedidos() {
  const data = JSON.parse(await readFile("./pedidos.json"));
  return await data;
}

export default {
  getPedidos
}