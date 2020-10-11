import express from 'express';
//import cors from 'cors';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    let account = req.body;

    if (!account.nome || account.balance == null) {
      throw new Error('Name e Balance são obrigatórios! ');
    }

    const data = JSON.parse(await readFile(global.filename));

    account = {
      id: data.nextId++,
      name: account.nome,
      balance: account.balance,
    };
    //data.nextId++;
    data.accounts.push(account);

    await writeFile(global.filename, JSON.stringify(data, null, 2));

    res.send(account);

    logger.info(` POST / account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});
//router.get('/', cors(), async (req, res, next)
router.get('/', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));
    delete data.nextId;
    res.send(data);
    logger.info(' GET / account');
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));
    const account = data.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );
    res.send(account);
    logger.info(' GET / account/:id');
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));
    data.accounts = data.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );

    await writeFile(global.filename, JSON.stringify(data, null, 2));

    res.end();
    logger.info(' DELETE / account/:id - ' + req.params.id);
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const account = req.body;

    if (!account.nome || account.balance == null) {
      throw new Error('Name e Balance são obrigatórios! ');
    }

    const data = JSON.parse(await readFile(global.filename));
    const index = data.accounts.findIndex((a) => a.id === account.id);

    if (index === -1) {
      throw new Error('Registro não encontrado.');
    }

    data.accounts[index].nome = account;
    data.accounts[index].balance = account;

    await writeFile(global.filename, JSON.stringify(data, null, 2));

    res.send(account);
    logger.info(` PUT / account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  global.logger.error(`${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
