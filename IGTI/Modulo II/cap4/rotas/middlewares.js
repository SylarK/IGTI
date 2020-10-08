import express from 'express';
import carrosRouter from './carrosRouter.js';



/* Rotas no nível da aplicação */
const app = express();
app.use(express.json());

/* Rotas ao nível do router */
app.use('/carros', carrosRouter);

app.use((req, res, next) => {
    console.log(new Date());
    //res.send(new Date());
    next();
}); // -> Será executado em todo momento, independente do que for chamado.

app.get('/teste', (req, res) =>{
    res.send('Working...');
    res.end();
})

app.listen(3000, () => {
    console.log('API...');
})
