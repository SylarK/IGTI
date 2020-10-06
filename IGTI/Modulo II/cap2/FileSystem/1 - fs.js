import fs from "fs"; //modulo nativo do node.js

// writeFile(nome_arquivo, conteúdo, callback)
// readFile(caminho, callback(err, data))
// appendFile(caminho, append, callback)

fs.writeFile('teste.txt', 'File System', (err) => {
    if(err){
        Callerror(err);
    }else{
        fs.appendFile('teste.txt', '\nAdicionando mais uma linha', (err) => {
            if(err){
                Callerror(err);
            }

            fs.readFile('teste.txt', (err, data) => {
                if(err){
                    Callerror(err);
                }else{
                    console.log('Conteúdo : ' + data);
                }
            });
        });
        
    }
});

function Callerror(err){
    console.log('Houve um erro com a execucao!');
    console.log('Erro: ' + err);
}