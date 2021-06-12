import express from 'express';
import routes from './routes/index.js'

const app = express();
app.use(express.json());
app.use('/pedido', routes);


app.listen(3000, () => { console.log("API Started.") })