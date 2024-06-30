/*
Operador   Descrição    Exemplo
&&         AND lógico   if (condition1 && condition2)
||         OR lógico    if (condition1 || condition2)
!          NOT lógico   if (!condition)
*/

// AND (&&)
/* A       B     A + B
 true  | true  | true
 true  | false | false
 false | true  | false
 false | false | false
 */

 let age = 18
 let verifiedVisa = true
            // true         //true 
 console.log((age >=18) && (verifiedVisa === true)) // true
 
 age = 18
 verifiedVisa = false
             //true        //false
 console.log((age >=18) && (verifiedVisa === true)) // false

 age = 17
 verifiedVisa = true
             //false        //true
 console.log((age >=18) && (verifiedVisa === true)) // false
 
 age = 17
 verifiedVisa = false
             //false        //false
 console.log((age >=18) && (verifiedVisa === true)) // false


 ////////////////////////////////////////////////////////////////////

 // condição 100 moedas e 1 estrela
let collectedCoins = 100
let item = "star"
                // true                     // true
let resultado = (collectedCoins === 100) && (item === "star") //true
console.log(resultado)

collectedCoins = 100
item = "Star"
             // true                     // false (Case sensitive)
resultado = (collectedCoins === 100) && (item === "star") //false
console.log(resultado)

collectedCoins = 90
item = "star"
             // false                     // true 
resultado = (collectedCoins === 100) && (item === "star") //false
console.log(resultado)

collectedCoins = 90
item = "Star"
             // false                     // false 
resultado = (collectedCoins === 100) && (item === "star") //false
console.log(resultado)