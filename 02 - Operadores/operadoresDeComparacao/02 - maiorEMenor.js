/*
== |Igual a          |let isEqual = (x == y);
!= |Diferente de     |let isNotEqual = (x != y);
>  |Maior que        |let isGreater = (x > y);
<  |Menor que        |let isLess = (x < y);
>= |Maior ou igual a |let isGreaterOrEqual = (x >= y);
<= |Menor ou igual a |let isLessOrEqual = (x <= y);
*/

let minimumAge = 18
let userAge = 17
let validAge = userAge > minimumAge

console.log (validAge) // false

// -------------------------------------------

minimumAge = 18
userAge = 18
validAge = userAge > minimumAge

console.log (validAge) // false

// -------------------------------------------

minimumAge = 18
userAge = 18
validAge = userAge >= minimumAge

console.log (validAge) // true

// -------------------------------------------

minimumAge = 50
userAge = 45
validAge = minimumAge < userAge

console.log (validAge) // false

// -------------------------------------------

minimumAge = 50
userAge = 60
validAge = minimumAge < userAge

console.log (validAge) // true

// -------------------------------------------

minimumAge = 50
userAge = 50
validAge = minimumAge <= userAge

console.log (validAge) //true