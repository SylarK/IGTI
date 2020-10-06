/* JSON */

import {promises as fs} from 'fs';

async function writeReadJson(){
    try{

        const arrayCarros = [
            'Gol', 'Palio', 'Uno', 'HB20'
        ];

        const nomes = [
            'Lucas', 'Marília', 'Olívia', 'Noah'
        ];
        const obj = {
            carros: arrayCarros,
            nomes: nomes  
        };
        
        await fs.writeFile('teste.json', JSON.stringify(obj));
        
        const data = JSON.parse(await fs.readFile('teste.json', 'utf-8'));
        data.carros.push('Sandero');
        
        await fs.writeFile('teste.json', JSON.stringify(data));

    }catch(err){
        console.log(err);
    }
}

writeReadJson();