import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
    console.log('/carros');
    res.send('GET/carros');
});

router.get('/modelos?', (req, res) => {
    res.send('Modelo do carro');
})

export default router;