import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    throw new Error('Error message text! Something is crashed');
})

app.post('/',  async (req, res, next) => {
    try{
        throw new Error('Error message text! Something is crashed here! Take care!!!');
    }catch(err){
        next(err)
    }
    
    
})

app.use((err, req, res ,next) => {
    console.log('Erro 1');
    next(err);
})

app.use((err, req, res, next) => {
    console.log('Erro 2');
    res.status(500).send('Ops!! Ocorreu um erro aqui! Tente novamente mais tarde!');
})

app.listen(3000, () => {
    console.log('API...')
})

