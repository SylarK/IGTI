import express from 'express';
import winston from 'winston';
import { promises as fs } from 'fs';
import routerGrade from './routes/grade.js';

/*  Winston */

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'grades-control-api.log' }),
  ],
  format: combine(
    label({ label: 'grades-control-api ' }),
    timestamp(),
    myFormat
  ),
});

/* end Winston */

const { readFile, writeFile } = fs;

const app = express();

global.filename = 'grades.json';

app.use(express.json());
app.use('/grade', routerGrade);

app.listen(3000, () => {
  global.logger.info('API Started...');
});
