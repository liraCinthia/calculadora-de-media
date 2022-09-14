var elementoResultadoAzul = document.getElementById('resultadoAzul');
var elementoResultadoVermelho = document.getElementById('resultadoVermelho');

var nome = 'Cinthia';

var notaPrimeiroBimestre = 9;
var notaSegundoBimestre = 7;
var notaTerceiroBimestre = 8;
var notaQuartoBimestre = 9;

var notaSoma =
  notaPrimeiroBimestre +
  notaSegundoBimestre +
  notaTerceiroBimestre +
  notaQuartoBimestre;

var notaMedia = notaSoma / 4;

var resultado = notaMedia.toFixed(1);

//mostra ("Olá, " + nome + "." + " Sua nota foi " + resultado);

//console.log("Olá, " + nome + "." + " Sua nota foi " + resultado)

var notaP1 = parseInt(prompt('Digite a sua nota da P1'));

var notaP2 = parseInt(prompt('Digite a sua nota da P2'));

if ((notaP1 + notaP2) / 2 >= 7) {
  elementoResultadoAzul.innerHTML = 'Você está: APROVADO';
} else {
  elementoResultadoVermelho.innerHTML = 'Você está: REPROVADO';
}

// Revisão
// variáveis - como uma forma do computador guardar algo

// strings - considerado texto, palavras

// console.log - forma de imprimir

// toFixed - fixar uma ou quantas casas decimais desejar

// operações matemáticas

// concatenação - junção de elementos, digamos assim.
