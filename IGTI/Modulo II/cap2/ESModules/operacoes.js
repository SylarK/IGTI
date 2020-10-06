const nome = 'Operações utilizando CommonJS';

function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

export default {soma, subtracao, nome};