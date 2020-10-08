import express from 'express';

const app = express();
app.use(express.json());

app.all('/testAll', (req, res) => {
  //res.send('http://localhost:3000/testAll - ' + req.method); // Qual método HTTP estamos consumindo
});

/*    Caracteres Especiais  */

app.get('/teste?', (_, res) => {
  res.send('/teste?');
}); // ? -> It's optional

app.get('/buzz+', (_, res) => {
  res.send('/buzz+');
}); // + -> Any qtd

app.get('/one*Blue', (req, res) => {
  res.send(req.path);
}); // * -> Any value

app.post('/test(ing)?', (req, res) => {
  console.log(req.body); // pegar parametros pelo body da requisição
  res.send(req.path);
}); // () -> Unit

app.get(/.*Red$/, (req, res) => {
  res.send(req.path);
}); // Utilizando expressões regulares

/*  Parametros na rota  */

app.get('/testParam/:id/:a?', (req, res) => {
  res.send('ID digitado : ' + req.params.id + ' - ' + req.params.a);
});

/* Parametros via query */

app.get('/testeQuery', (req, res) => {
  res.send(req.query);
});

/* Next   */

app.get(
  '/testMultipleHandlers',
  (req, res, next) => {
    console.log('Callback - I');
    next();
  },
  (req, res) => {
    console.log('Callback - II');
    res.send('Finalizado');
    //res.end();
  }
);

/* Next com Array */

const callback1 = (req, res, next) => {
  console.log('Callback - I');
  next();
};

const callback2 = (req, res, next) => {
  console.log('Callback - II');
  next();
};

function callback3(req, res, next) {
  console.log('Callback - III');
  next();
}

function callback4(req, res) {
  console.log('Callback - IV');
  res.send('Finalizado');
}

app.get('/testMultipleHandlersArray', [
  callback1,
  callback2,
  callback3,
  callback4,
]);

/* Route */
// A diferença do Route para o All é que no route eu escolho quais requisições entram

app
  .route('/testRoute')
  .get((req, res) => {
    res.send(req.method);
  })
  .post((req, res) => {
    res.send(req.method);
    console.log(req.body);
  })
  .delete((req, res) => {
    res.send(req.method);
  });

app.listen(3000, () => {
  console.log('API Started! ');
});
