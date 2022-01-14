/*
/////////////Variable Mutation Example 1/5/22//////////
let hello = 15;
hello = 20;
console.log(hello);

hello = 500;
console.log(hello);

let coffeeCup = "person";
coffeeCup = "banana";

//this will throw an error because the hello variable has already been declared
//let hello
*/

/*
/////////type coersion Example///////
let myNumber = 15;
//console.log(typeof myNumber);

//convert myNumber to a string.  This is an example of implicit conversion
myNumber = myNumber + " is the best number of all time!"
//console.log(typeof myNumber);

//Why should use explict conversion?  Let's get input from the user. 
//This is the bad way to do things.
    let ageBadExample = prompt("How old are you?");

    console.log(typeof ageBadExample);

    //because age is being converted to a string via implicit, then it concatents age with whatever the user puts in.
    console.log(`In 10 years you will be ${ageBadExample + 10} years old!`);

//This is the good way to define a variable because you are being intentional with the type of data you get from the user
    let ageGoodExample = Number(prompt("How old are you?"));

    console.log(typeof ageGoodExample);

    console.log(`In 10 years you will be ${ageGoodExample + 10} years old!`);

//convert myNumber to a string using explicit conversion!

//Use can use String(data), Boolean(data), Number(data) to convert a data type.
*/



////Another example of explicit conversion and why it is important
let num1 = 15;
let num2 = 15;

//this will display true because they are equal and it does not compare the type.  Double equals (==) compares two values together but is not strict.
console.log(num1 == num2);

//this will display true because they are equal it does compare the type.  triple equals (===) compares two values together and is strict.
console.log(num1 === num2);

//the problem with ==  and not being explicit
num2 = "15";
console.log(num1 == num2);
console.log(num1 === num2);




//Example parseInt vs Number

