/*
Operador   Descrição    Exemplo
&&         AND lógico   if (condition1 && condition2)
||         OR lógico    if (condition1 || condition2)
!          NOT lógico   if (!condition)
*/

// NOT (!)
/* A      !A    
 true  | false  
 false | true 
 */

// Usado para negar uma afirmação ou mudar a polaridade de uma variável booleana
let weather = "chuva"
let resultado = weather === "chuva"
console.log(resultado) // true

weather = "chuva"
resultado = weather !== "chuva" // weather é diferente de chuva?
console.log(resultado) // false

weather = "chuva"
resultado = weather === "chuva" 
console.log(!resultado) // false (true invertido)

weather = "chuva"
let hour = 8
resultado = (weather !== "chuva") && (horario > 6)
console.log(resultado) // false

weather = "chuva"
hour = 8
resultado = !((weather !== "chuva") && (horario > 6))
console.log(resultado) // true