import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Working...<br>Everthing is gonna be fine! ');
});

app.use(express.static('public'));
app.use('/images', express.static('public'));

app.listen(3000, () => {
  console.log('API Started...');
});
