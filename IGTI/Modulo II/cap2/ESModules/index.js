import operacoes from "./operacoes.js";
import multiplicacao from "./operacoes2.js";
import {resto, divisao} from "./operacoesNomeadas.js";

console.log(operacoes.nome);
console.log(operacoes.soma(5,5));
console.log(operacoes.soma(15,5));
console.log(operacoes.subtracao(5,5));
console.log(operacoes.subtracao(15,5));
console.log(multiplicacao(15,5));
console.log(multiplicacao(12,8));
console.log(resto(12,8));
console.log(divisao(12,8));
