// Aquí te pasamos una cadena para trabajar. 
// let myString = 'Javascript+es+super+cool' ; 
//----------------------------------------------------------------------------------------------------
// Convierta la cadena en un array, eliminando los caracteres + en el proceso.
// Guarde el resultado en una variable llamada myArray.
let myString = 'Javascript+es+super+cool' ; 
myArray = myString.split('+');
console.log(myArray);
//----------------------------------------------------------------------------------------------------
// Almacene la longitud del array en una variable llamada arrayLength.
let arrayLength = myArray.length;
console.log("la longitud es de:" +arrayLength);
//---------------------------------------------------------------------------------------------------
// Almacene el último elemento del array en una variable llamada lastItem.
let lastItem = myArray.pop();
console.log("el ultimo item es: " +lastItem);
