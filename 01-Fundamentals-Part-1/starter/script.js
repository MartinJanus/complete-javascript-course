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
// let jsisFun = true;

// console.log(jsisFun);

// console.log(typeof jsisFun);

// //changed data type (dynamic typing)
// jsisFun = "YES!";

// console.log(typeof jsisFun);

// //undefined
// let year;

// console.log(typeof year);

//const, let, var

//Math operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //2 ** 3 means 2 to the power of 3

// const firstName = "Jonas"
// const lastName = "Schmedtmann"

// console.log(firstName + " " + lastName);

//Assignment operators
// let x = 10 + 5; // 15

// x += 10; // x = x + 10 (25)
// x *= 4; // x = x * 4 (100)
// x++; // x = x + 1; (101)
// x--; // x = x - 1; (100)

//Comparison Operators
// //(would be stored in variables)
// console.log(ageJonas > ageSarah); //returns boolean (true)       >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

//Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(averageAge);

//Strings and Template Literals

// const firstName = "Jonas";
// const job = "Teacher";
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

//back ticks for template string es6 feature
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(jonasNew);

// console.log(`Some random string`)

// console.log(`string
// multiple
// lines`)

//if-else Control Structure
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log("Can take Drivers Test");
// }
// else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1991;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }

// console.log(century);

//Type Conversion and Coercion

//type conversion
// const inputYear = "1991"; //string -> number

//can convert string, number, boolean

// console.log(Number(inputYear) + 18)
// console.log(String(23));

//type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

//Truthy and Falsy Values
//5 Falsy values: 0, ‘’, undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(''));

//conversion to boolean is implicit not explicit
// const money = 0;

// if (money) {
//     console.log("Dont Spent it all");
// }
// else {
//     console.log("You should get a job")
// }

//Equality Operators

// const age = 18;

// if (age === 18) console.log("Adult");

//triple equals doesnt perform type coersion
//double equals is loose equality operator - does type coersion

// const favouriteNumber = Number(prompt("What's your favourite number?"));
// console.log(favouriteNumber);

// if (favouriteNumber === 23) {
//     console.log("Cool");
// }
// else if (favouriteNumber === 7) {
//     console.log("Also Cool")
// }
// else {
//     console.log("Number is not cool")
// }

// if (favouriteNumber !== 23) {
//     console.log("Why not 23?");
// }

//Logical Operators
// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive");
// }
// else {
//     console.log("Someone else should drive");
// }

// const isTired = false; //C
// console.log(hasDriversLicence || hasGoodVision || isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive");
// }
// else {
//     console.log("Someone else should drive");
// }

//switch statement

const day = "thursday";

switch (day) {
  case "monday": //day === "monday"
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record Videos`);
  case "saturday":
  case "sunday":
    console.log(`Enjoy the Weekend`);
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Write code examples`);
} else if (day === "friday") {
  console.log(`Record Videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the Weekend`);
} else {
  console.log("Not a valid day!");
}
