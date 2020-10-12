import { timeStamp } from 'console';
import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>GRADE / GET</h1>');
});

router.post('/', async (req, res) => {
  try {
    let grade = req.body;

    const data = JSON.parse(await readFile(global.filename));

    grade = {
      id: data.nextId++,
      student: grade.student,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
    };

    data.grades.push(grade);

    console.log(data);
    //await writeFile(global.filename, JSON.stringify(data));
    //res.send(data);
    res.end();
  } catch (err) {
    console.log('Erro -> ' + err.message);
  }
});

export default router;
