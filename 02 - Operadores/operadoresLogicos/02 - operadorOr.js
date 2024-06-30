/*
Operador   Descrição    Exemplo
&&         AND lógico   if (condition1 && condition2)
||         OR lógico    if (condition1 || condition2)
!          NOT lógico   if (!condition)
*/

// OR (||)
/* A       B     A + B
 true  | true  | true
 true  | false | true
 false | true  | true
 false | false | false
 */

// Nosso boneco só pode sair se tiver sem chuva ou com guarda-chuva
let weather = "sol"
let item = "guarda-chuva"
                   // true                  // true
let canGoOutside = (weather !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + canGoOutside) // true

weather = "chuva"
item = "guarda-chuva"
                // false                  // true
canGoOutside = (weather !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + canGoOutside) // true

weather = "chuva"
item = "pá"
                // false                  // false
canGoOutside = (weather !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + canGoOutside) // false

// pelo menos uma condição verdadeira para ser = true