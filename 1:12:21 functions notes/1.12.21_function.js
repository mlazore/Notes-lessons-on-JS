//suggested learning practice
// let firstName = "Justin"
// console.log(firstName.toUpperCase());

//create a toUpperfunction to practice

//if-else statements

let favFood = "KBBQ";
let secFavFood = "Squid";
let thirdFavFood = `Sushi`;
let defaultFood = "chickenTenders";
let foodAtRestaurant = "KBBQ";

if(favFood == foodAtRestaurant){
    console.log(`I'm getting ${favFood}`)
}
else {
    console.log(`I'm getting ${defaultFood}`)
}


//if - if/else -else statements

let favFood = "KBBQ";
let secFavFood = "Squid";
let thirdFavFood = `Sushi`;
let defaultFood = "chickenTenders";
let foodAtRestaurant = "KBBQ";

if(favFood == foodAtRestaurant){
    console.log(`I'm getting ${favFood}`)
}
else if (secFavFood == foodAtRestaurant){
    console.log(`I'm getting ${defaultFood}`)
}
else {
    console.log(`I'm getting ${defaultFood}`)
}


// //why should i use multiple if's?
let favFood = "KBBQ";
let secFavFood = "Squid";
let thirdFavFood = `Sushi`;
let defaultFood = "chickenTenders";
let foodAtRestaurant = "KBBQ";

if(favFood == foodAtRestaurant){
    console.log(`I'm getting ${favFood}`)
}
if (secFavFood == foodAtRestaurant){
    console.log(`I guess I'm getting ${secFavFood}`)
}


///////////////////       FUNCTION NOTES            ////////////////////

//arguments vs parameters


//The parameters are firstname and lastname
function spellMyNameBackwards(firstName, lastname) {
    return(`Your name in reverse is ${lastname}, ${firstName}!`)
}

//the arguments are `Martin` , `Lazore`
console.log(spellMyNameBackwards(`Martin` , `Lazore`));



//password function

//new user 

function ChecknewUserBothPasswordsMatch(pw1Field , pw2field){

    return (pw1Field == pw2field)
}

//returning user 

function CheckOldUserPwCorrect(pw1Field , pw2field){

    return (pw1Field == pw2field)
}

////why we use return statements
////function without return statements

function sum (x,y){
    return x+y;
}

console.log(sym(5,5));


function pt (num1, num2) {
    return Math.sqrt((num1 * num1) + (num2 * num2));
}
//sqrt is square root 

////// notes on functions with Dyl

///




