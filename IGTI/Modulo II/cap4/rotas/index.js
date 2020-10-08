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

app.listen(3000, () => {
  console.log('API Started! ');
});
