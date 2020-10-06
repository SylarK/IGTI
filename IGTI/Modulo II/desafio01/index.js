import {promises as fs} from 'fs';

let dadosEstados = [];
let dadosCidades = [];
let obj = {};

getData();


async function getData(){
    try{
        dadosEstados = JSON.parse(await fs.readFile('data/Estados.json', 'utf-8'))
        dadosCidades = JSON.parse(await fs.readFile('data/Cidades.json', 'utf-8'))
        //question01();]
        //question02('GO');
        question03();
        
    }catch(err){
        getError(err);
    }
}

async function question01(){
    try{

        
       
        for(let i = 0; i < dadosEstados.length; i++){

            const data = [];
            const temp = {};

            for(let j = 0; j < dadosCidades.length; j++){

                if(parseInt(dadosCidades[j]['Estado']) === parseInt(dadosEstados[i]['ID'])){
                    data.push(dadosCidades[j]['Nome']);
                }
            
            }
            
            temp[dadosEstados[i]['Sigla']] = data;
            await fs.writeFile('estados/' + dadosEstados[i]['Sigla'].json, JSON.stringify(temp));
            


        }
        console.log('Finalizado.');



    }catch(err){
        getError(err);
    }
    
}

function getError(err){
    console.log('Houve um erro!');
    console.log('Erro -> ' + err);
}

async function question02(uf){
    const leitura = JSON.parse(await fs.readFile('estados/' + uf + '.json'));
    return leitura;
}

async function question03(){

    try{
        let data = {};
    
        for(let i = 0; i < dadosEstados.length; i++){
            //data[dadosEstados][i]['Sigla'] = question02(dadosEstados[i]['Sigla'])
            //console.log(dadosEstados[i]['Sigla']);
            const estado = JSON.parse
        }
    
        //console.log(data);
    }catch(err){
        getError(err);
    }
}