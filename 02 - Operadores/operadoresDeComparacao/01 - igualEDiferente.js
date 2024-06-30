/*
== |Igual a          |let isEqual = (x == y);
!= |Diferente de     |let isNotEqual = (x != y);
>  |Maior que        |let isGreater = (x > y);
<  |Menor que        |let isLess = (x < y);
>= |Maior ou igual a |let isGreaterOrEqual = (x >= y);
<= |Menor ou igual a |let isLessOrEqual = (x <= y);
*/

// = é atribuição
let numero = "1"
console.log(numero = 1) // 1

// == é para comparar valor
numero = "2"
console.log(numero == 2) // true

// === é para comparar valor e atribuição
numero = "3"
console.log(numero === 3) // false

// !== é diferente?
let marca= "Apple"
let resultado = marca !== "Samsung"
console.log(resultado) // true

// Guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBlocked = "123.445.222-45"
let cpfUser = "222.111.222-09"
let isCPFBlocked = cpfUser === cpfBlocked

console.log("O usuario pode embarcar? " + isCPFBlocked) // false


let CPFAllowed = "222.555.333-01"
cpfUser = "222.555.333-02"
let allowedToBoard = cpfUser !== CPFAllowed

console.log("É um usuário inválido? " + allowedToBoard) // true