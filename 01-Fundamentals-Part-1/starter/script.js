//Value and Variables 

/*
let js = "Amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23)

let firstName = "Matilda";

console.log(firstName);
*/
//Data Types

//delcared
let jsisFun = true;

console.log(jsisFun);

console.log(typeof jsisFun);


//changed data type (dynamic typing)
jsisFun = "YES!";

console.log(typeof jsisFun);

//undefined 
let year;

console.log(typeof year);

//const, let, var


//Math operators 

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //2 ** 3 means 2 to the power of 3 

const firstName = "Jonas"
const lastName = "Schmedtmann"

console.log(firstName + " " + lastName);


//Assignment operators
let x = 10 + 5; // 15

x += 10; // x = x + 10 (25)
x *= 4; // x = x * 4 (100)
x++; // x = x + 1; (101)
x--; // x = x - 1; (100)

//Comparison Operators 
//(would be stored in variables)
console.log(ageJonas > ageSarah); //returns boolean (true)       >, <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

