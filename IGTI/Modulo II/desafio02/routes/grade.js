import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.send('Tudo funcionando bem! Method: ' + req.method);
  } catch (err) {
    next(err);
  }
});

// 1
router.post('/', async (req, res, next) => {
  try {
    let grade = req.body;

    const data = JSON.parse(await readFile(global.filename));

    grade = {
      id: data.nextId++,
      student: grade.student,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
      timestamp: new Date(),
    };

    data.grades.push(grade);

    await writeFile(global.filename, JSON.stringify(data, null, 2));

    res.send(grade);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  global.logger.error(`Lucas, something is wrong: ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
