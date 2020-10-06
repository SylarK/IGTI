/* WriteFileSync -> Sem utilizar callbacks */

import fs from 'fs';

try{
    console.log('1');
    fs.writeFileSync('teste.txt', 'Utilizando o WriteFileSync');
    console.log('2');
    console.log('3');
    const data = fs.readFileSync('teste.txt', 'utf-8');
    console.log(data);
    console.log('4');
    console.log('5');
}catch(err){
    console.log('Ocorreu um erro -> ' + err);
}

//Deve-se evitar trabalhar dessa forma utilizando o node.js, para que não haja bloqueio da thread