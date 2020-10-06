import readline from 'readline';

const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pergunta();

function pergunta(){
    rl.question('Digite um número : ', numero => {
        if(parseInt(numero) == -1){
            rl.close();
        }else{
            const res = [];

            for(let i = 0; i < parseInt(numero); i++){
                if(i%3 == 0 || i%5 == 0){
                    res.push(i);
                }
            }

            console.log(res);
            pergunta();
        }
        //rl.close();
    });

}
