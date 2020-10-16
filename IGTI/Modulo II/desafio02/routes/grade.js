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
    global.logger.info(`Registro inserido. ID - ${grade.id}`);
  } catch (err) {
    next(err);
  }
});

// 2
router.put('/', async (req, res, next) => {
  try {
    //console.log('Parametro : ' + req.params.id);

    const grade = req.body;
    const data = JSON.parse(await readFile(global.filename));

    if (!data.grades[grade.id - 1]) {
      throw new Error('Registro não foi encontrado no banco de dados.');
    }

    data.grades[grade.id - 1] = {
      id: grade.id,
      student: grade.student,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
      timestamp: new Date(),
    };

    await writeFile(global.filename, JSON.stringify(data, null, 2));
    res.send(data.grades[grade.id - 1]);
    global.logger.info('Registro Alterado. ID - ' + grade.id);
  } catch (err) {
    next(err);
  }
});

//3

router.delete('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));

    const index = data.grades.findIndex((a) => a.id == req.params.id);

    if (index === -1) {
      throw new Error(
        'O registro não foi encontrado no banco de dados para ser deletado.'
      );
    }

    data.grades = data.grades.filter(
      (grade) => grade.id !== parseInt(req.params.id)
    );

    await writeFile(global.filename, JSON.stringify(data, null, 2));
    res.send('Registro de número ' + req.params.id + ' excluído com sucesso. ');
    global.logger.info('Registro excluído. ID - ' + req.params.id);
  } catch (err) {
    next(err);
  }
});

// 4
router.get('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));
    const index = data.grades.findIndex((a) => a.id == req.params.id);

    if (index === -1) {
      throw new Error('O registro não foi encontrado no banco de dados.');
    }

    res.send(data.grades[index]);
  } catch (err) {
    next(err);
  }
});

// 5
router.get('/5/:student/:subject', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));
    const find = data.grades.filter(
      (grade) =>
        grade.student == req.params.student &&
        grade.subject == req.params.subject
    );

    /* let sum = 0;
    for (const [id, grade] of Object.entries(find)) {
      sum += grade.value;
    }
    console.log(`Soma dos elementos : ${sum}`);
    */

    let sum = find.reduce((accumulator, grade) => {
      return accumulator + grade.value;
    }, 0);

    console.log(sum);
    res.send(
      `A soma das notas em ${req.params.subject} para o aluno ${req.params.student} é igual a ${sum}.`
    );
  } catch (err) {
    next(err);
  }
});

// 6
router.get('/6/:subject/:type', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));

    const find = data.grades.filter(
      (grade) =>
        grade.subject === req.params.subject && grade.type === req.params.type
    );

    let media = find.reduce((accumulator, grade) => {
      return accumulator + grade.value;
    }, 0);
    media = media / find.length;

    console.log(`Média : ${media}`);
    res.send(`A média das notas na materia ${req.params.subject} dentro do tópico ${req.params.type} é igual 
    a ${media}`);
  } catch (err) {
    next(err);
  }
});

// 7
router.get('/7/:subject/:type', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.filename));

    const find = data.grades.filter(
      (grade) =>
        grade.subject === req.params.subject && grade.type === req.params.type
    );

    find.sort(function (a, b) {
      return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
    });

    res.send(find);
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  global.logger.error(`Lucas, something is wrong: ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
