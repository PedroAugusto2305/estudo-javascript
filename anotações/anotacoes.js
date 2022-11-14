/* 
No javaScript (e em outras linguagens de programação) dados * * podem ser representados de diferentes formas.

--------------------------------------------------------------------

------------------------ Tipos primitivos ------------------------- 
 
number e bigint (números grandes): números inteiros, float, e etc.

string:Podem ser tratadas como uma lista de caracteres, no JS números também podem ser usados como valores de texto. 

boolean: são valores binários, ou seja, true or false. 

null e undefined: um valor null é um valor nulo, ou seja é um valor vazio, porém ele possuí um valor, em JS existe uma diferença entre colocar um valor nulo e colocar um valor vazio (undefined), o undefined é quando uma váriavel não possui valor nenhum, ou seja, não recebeu valor algum. 

------------------------ Outros tipos ------------------------- 

também existem os tipos Objetos e Funções, que são tipos mais elaborados. 

--------------------------------------------------------------------

-------------------------- Variáveis ------------------------------ 

Servem para armazenar os dados para podermos usá-los no nosso código.

No JS existem três modos de se criar uma variável: var, let e const.

var name = "Pedro" (sintax de variável)

O JS permite que criemos variáveis sem valores, para serem usadas posteriormente no código.

var age; (sintax sem valor)

=> as declarações de var tem escopo global ou de função, enquanto as declarações de let e de const têm escopo de bloco.

=> variáveis de var podem ser atualizadas e declaradas novamente dentro de deu escopo. As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente.

=> as variáveis var são inicializadas com undefined, as variáveis com let e const não são inicializadas.

=> enquanto var e let podem ser declaradas sem ser inicializadas, const precisa da inicialização durante a declaração.

Hoje em dia já não é mais utilizado de forma recorrente o var, o let é uma forma mais moderna de se criar variáveis que podem ser atualizadas posteriormente.

=> é muito importante nomear de forma correta as váriaveis, facilitando o entendimento e a leitura do código. É uma boa prática de programação criar nomes significativos para nossas variáveis. 

--------------------------------------------------------------------

--------------------- Operadores e Expressões ----------------------

=> Operadores:
  -> Aritméticos: +, -, *, / e %;
    exemplo: a + b = c
    a - b = c
    a * b = c
    a / b = c
    a % b = c

  -> Agrupamento: ();

  -> Atribuição: =, +=, -=, *=, /= e %=;

  -> Encadeamento: é o . utilizado para juntar expressões no JS, por exemplo console.error("ERRO") o . entre console e error é o operador de encadeamento;

  -> Incrementar (++) e Drecrementar (--): soma 1 ou subtrai 1;

--------------------------------------------------------------------

--------------------- JavaScript no HTML ---------------------------

É possível utilizar o JS em arquivos HTML, porém não é considerada uma boa prática, desse modo então criamos um novo arquivos para armazenar nossos códigos JS, esse arquivo possuí a extensão .js 

--------------------------------------------------------------------

=> parseFloat: analisa um argumento (convertendo-o para uma string em primeiro caso necessário) e retorna um número de ponto flutuante (número decimal).

--------------------------------------------------------------------

--------------------- Comparadores de Dados ------------------------

Retornam um resultado booleano (true or false)

=> Operadores: 
  == e === são operadores de igualdade;
  != e !== operadores de desigualdade;
  >, >=, <, <= operadores de maior, menor e maior igual, menor igual.

--------------------------------------------------------------------

--------------------- Operadores Lógicos ---------------------------

=> E (AND): Só é verdadeiro se ambas as partes forem verdadeiras
  Operador &&
  ---- Tabela Verdade ----
  true && true === true
  true && false === false
  false && true === false
  false && false === false

=> Ou (OR): Só é falso se ambas as partes forem falsas
  Operador ||
  ---- Tabela Verdade ----
  true || true === true
  true || false === true
  false || true === true
  false || false === false

=> Não (NOT): Inverte o resultado (de verdadeiro para falso e vice-versa)
Operador !
---- Tabela Verdade ----
!true === false
!false === true

--------------------------------------------------------------------

-------------- Estruturas Condicionais: IF e ELSE ----------------- 

Permite criar blocos de código que vão ser executados somente quando uma determinada operação lógica for verdadeira.

=> SE condição === true ENTÃO faça algo

Além disso, pode ser usado com o ELSE para acrescentar um bloco que vai ser executado somente quando essa mesma operação lógica for falsa

=> SE condição === true ENTÃO faça alguma coisa SENÃO faça outra coisa

sintaxe:
  if(condição) {
    bloco de código a ser executado
  } else {
    bloco de código a ser executado
  }

também é possível fazer dessa forma:
  if(condição) {
    bloco de código a ser executado
  } else if (condição) {
    bloco de código a ser executado
  } else {
    bloco de código a ser executado
  }

Operador ternário: ? e :
Forma abreviada e autoavaliada do IF ELSE.

sintaxe:
const resultado = condicao ? resultado_verdadeiro : resultado_falso

--------------------------------------------------------------------

-------------- Estruturas Condicionais: Switch --------------------

Permite criar blocos condicionais como o IF, porém com uma estrutura que avalia uma expressão e testa o resultado contra vários casos, executando os casos correspondentes.
É possível definir um caso padrão, que sempre é executado.
Também é possível parar a execução após algum dos casos.

SWITCH expressão
  caso a: faça alguma coisa
  caso b: faça outra coisa E PARE
  caso c: faça mais alguma coisa
  POR PADRÃO: faça algo sempre

sintaxe:
  switch (expressão) {
    case "a": 
      bloco de código
      break;
    case "b":
      bloco de código
      break;
    case "c": 
      bloco de código
      break;
    default:
      bloco de código
  }

--------------------------------------------------------------------

-------------- Estruturas de Repetição: While ----------------------

Estruturas de repetição servem para executar um mesmo bloco de código várias vezes.
O While serve para criar um laço de repetição que será executado enquanto uma determinada condição for verdadeira.
O While e todas as outras de repetição aceitam o break para parar a repetição a qualquer momento.
Atenção: é importante que sempre exista uma forma de condição se tornar falsa, ou então o bloco ficará se repetindo para sempre.

ENQUANTO condição FAÇA algo várias vezes.

sintaxe:
while(condição) {
  bloco de código
}

--------------------------------------------------------------------

-------------- Estruturas de Repetição: Do While -------------------

O do while é muito parecido com o while, porém ele garante que o bloco de código será executado pelo menos uma vez, mesmo que a condição seja falsa.
No do while a primeira verificação da condição só acontece depois que o bloco foi executado uma vez.

FAÇA alguma coisa ENQUANTO condição

sintaxe:
do{
  bloco de código
} while (condição)

*/
