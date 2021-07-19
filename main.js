//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(8)  Variable 2 (20)
//Realizar todas las Operacion compracion vistas en la clase
//Mostra en la consola todos los posibles resultados
//y explicar con sus propias palabras porque se dio es resultado 'true , false'

let num1 = parseInt(prompt("Ingrese numero 1"));
let num2 = parseInt(prompt("Ingrese numero 2"));
alert(`Oprime F12 para ver la consola`);

//Variable 1(num1)  Variable 2 (num2)
console.log(`numero 1 => ${num1}, numero 2 => ${num2}`);

//Igual 
// Solo da true cuando los dos numero son iguales, de lo contrario da false
console.log(`Numero 1 == Numero 2 => ${num1 == num2}`);

//Diferente 
// Solo da true cuando los dos numero son diferentes, de lo contrario da false
console.log(`Numero 1 != Numero 2 => ${num1 != num2}`);

//Identicos
// Solo da true cuando los dos numero son identicos es decir el numero y el tipo de dato es igual,
// de lo contrario da false
console.log(`Numero 1 === Numero 2 => ${num1 === num2}`);

//No Identicos
// Solo da true cuando los dos numero no son identicos es decir el numero y el tipo de dato no es igual,
// de lo contrario da false
console.log(`Numero 1 !== Numero 2 => ${num1 !== num2}`);

// Mayor que
// Solo da true cuando el numero 1 es mayor al numero 2.
console.log(`Numero 1 > Numero 2 => ${num1 > num2}`);

// Mayor o igual que
// Solo da true cuando el numero 1 es mayor o igual al numero 2.
console.log(`Numero 1 >= Numero 2 => ${num1 >= num2}`);

// Menor que
// Solo da true cuando el numero 1 es Menor al numero 2.
console.log(`Numero 1 < Numero 2 => ${num1 < num2}`);

// Menor o igual que
// Solo da true cuando el numero 1 es Menor o igual al numero 2.
console.log(`Numero 1 <= Numero 2 => ${num1 <= num2}`);


//Extra: Por medio de una venta emergente(alert) Dar la maxima
//informacion del desarrallodar del aplicativo en cuestion
alert(`Desarrollador por:\nWilliam Fernando Peña Corzo © Todos los derechos reservados`);

