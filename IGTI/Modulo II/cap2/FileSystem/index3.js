/* Utilizando promisses */

import {promises as fs} from 'fs';

init();

async function init(){
    try{
        await fs.writeFile('teste_promisse.txt', 'Hello, I am using a promisse with async / await');
        await fs.appendFile('teste_promisse.txt', '\nThis is a new line in the txt');
        const data = await fs.readFile('teste_promisse.txt', 'utf-8');
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

/* 
// Promisse Ryu

fs.writeFile('teste_promisse.txt', 'Hello, I am using a promisse.')
.then(() => {
    fs.appendFile('teste_promisse.txt', '\nNew line in the txt')
    .then(() => {
        fs.readFile('teste_promisse.txt', 'utf-8')
        .then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })

}).catch(err => {
    console.log(err);
}); 
*/