/*let hello = 15;
hello= 20; 
console.log(hello);

hello = 500;
console.log(hello);

let coffeCup = "person";
coffeeCup = "banana";

//this will throw an error at you because the hello variable has been used already
//let hello
*/

//type cohersion
//let myNumber = 15;
//console.log(typeof myNumber);

//convert myNumber to a string. This is an example of implicit conversion
// myNumber = myNumber + "Is the best number of all time!"
//console.log(typeof myNumber);

    //why should we use explicit conversion, get info from the user
    //this is the bad way to do things
   // let age = prompt("how old are you?");

////console.log(typeof age);


//console.log = (`in 10 years you will be ${age + 10} years old!`);

//convert myNumber to a string using explicit conversion!



let firstname = "martin"

if (firstname === "martin"){
    console.log("hello " + firstname);
}

let num1 = 5;

if (num1 % 2 === 0){
    console.log("is an equal numer ");
}else{
    console.log("the number is odd");
}


//compare this to the one below
let num1 = 20;
if (num1 % 2 === 0){
    console.log("this is even")
}else if(num1 % 5 === 0 ){
    console.log("divisible by 5")
}else {
    console.log("this is odd")
}

//this one below is making it multiple checkpoints instead of one, I took the "else if" statement out so now the code will run and check "this is even", and "divisible by 5", rather than reaching "this is even" and stopping since it reached its first condition.

let num1 = 20;
if (num1 % 2 === 0){
    console.log("this is even")
}

if(num1 % 5 === 0 ){
    console.log("divisible by 5")
}else {
    console.log("this is odd")
}

let month = 1-12;

if(month)