import express from 'express'
import cors from 'cors';
import winston from 'winston';
import { promises as fs } from 'fs';
import ClientesRoutes from './routes/ClientesRoutes.js'
import basicAuth from 'express-basic-auth';

const { readFile, writeFile } = fs;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
})

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "my-loggers.log" })
  ],
  format: combine(
    label({ label: "my-bank-api" }),
    timestamp(),
    myFormat
  )
});

global.fileName = "clientes.json";

const app = express();
app.use(express.json());
app.use(cors());

app.use(basicAuth({ authorizer: myAuthorizer }))

function myAuthorizer(username, password) {
  const userMatches = basicAuth.safeCompare(username, 'user');
  const passwordMatches = basicAuth.safeCompare(password, 'masterkey');

  return userMatches & passwordMatches;
}

app.use('/clients', ClientesRoutes)

app.listen(3000, async () => {
  try {
    await readFile(global.fileName);
    logger.info("API Started!");
  } catch (err) {
    const initalJson = {
      nextId: 1,
      accounts: []
    }
    writeFile(global.fileName, JSON.stringify(initalJson
    )).then(() => { logger.info("API Started!"); })
      .catch(err => { logger.error(err); });
  }
})
