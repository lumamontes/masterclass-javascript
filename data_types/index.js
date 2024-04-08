// number
// string
// boolean
// symbom
// regexp

typeof 10;
typeof "JavaScript";
typeof true;
typeof Symbol("iterator");
typeof null;
typeof undefined;

(10).toFixed(2);
"JavaScript".replace("a", "4");
true.toString();
Symbol("iterator").toString();

typeof function sum(a, b) {
  return a + b;
};
typeof { name: "Linus Torvalds" };
typeof [1, 2, 3, 4, 5, 6];
typeof /[a-zA-Z]+/;
typeof new Date();
/*
Quais palavras reservadas podem ser usadas para se criar variáveis na linguagem JavaScript?
 var
 let
 const
O que é correto afirmar sobre o tipo de variável const?
 Não permite nem a redeclaração e nem a reatribuição
 Seu escopo é limitado ao bloco
São tipos de dados pertencentes a linguagem JavaScript?
 number
 string
Em qual versão o tipo de dado symbol foi lançado?
 ES6
typeof null
 object
typeof [1,2,3,4,5,6]
 object
O que é correto afirmar sobre o tipo de variável let?
 Não permite a redeclaração mas permite a reatribuição
 Seu escopo é limitado ao bloco
Atualmente, qual destas opções deve ser evitada para criar variáveis por permitir a redeclaração e não ter o escopo limitado ao bloco?
 var

Tipos de Dados
Os tipos de dados na linguagem
JavaScript se dividem em
primitivos e objetos
Os primitivos são imutáveis, ou seja, ao
longo do tempo seu valor não é alterado


Os objetos são valores que representam
uma referência em memória que
pode ser alterada

Cuidado, não confunda os operadores
typeof e instanceof


O tipo Number é primitivo, imutável e é
representado internamente pelo padrão
IEEE 754 de 64 bits
Suporta os sistemas de numeração
decimal, hexadecimal, binário e octal
O sistema de numeração decimal, de base 10,
deve iniciar com um número de 1 a 9, seguido
por números de 0 a 9 com ou sem ponto,
indicando se é inteiro ou decimal

O sistema de numeração hexadecimal, de base
16, deve iniciar com 0x ou 0X, seguido por
números de 0 a 9 e letras de A a



O sistema de numeração binário, de base 2,
deve iniciar com 0b ou 0B, seguido por
números de 0 a 1


Os métodos toExponential, toFixed e
toPrecision podem ser utilizados para
mudar a forma como um número
é representado


 */

//
