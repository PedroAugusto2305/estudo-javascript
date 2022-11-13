/* No javaScript (e em outras linguagens de programação) dados * * podem ser representados de diferentes formas.

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




  
*/
