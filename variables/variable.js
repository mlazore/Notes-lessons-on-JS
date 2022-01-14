////let vs var vs const cs variables lesson////

//what is scope?///
///scope is the limit of what ever parameters you set///

//const means constant and the variables cannot change//
const num1 = 10;
console.log(num1);

num1 = 20;

//itll flag due to const being a variable that cannot be changed//
//use this to prevent errors later on down the line from someone else changing your code//

//let vs var//

//let is what we call blocked scope vs var function scoped. Let was introduced in ES6 so was const//

//global variable vs local//

var spiderman = "Andrew"; //example of a global variable //

function chgSpiderName () {
    spiderman = "Toby";

    let bestMJ = "Emma";
    console.log(bestMJ);

}


chgSpiderName();
console.log(spiderman);
console.log(bestMJ);

//1) calls the function
//2) updates the variable spiderman
//3) creates the variable bestMJ and assigns it a value
//4) prints the variable MJ
//5) function is over, so then it prints the variable spiderman


//The function below only exists within ChangeSpiderManName chgMjName();//
var spiderman = "Andrew"; //example of a global variable //

function chgSpiderName () {
    spiderman = "Toby";

    let bestMJ = "Emma";

    function chgMJName(){
        bestMJ = "Zendaya";
        let sideKick = "Ned";
        console.log(bestMJ);
    }
    chgMJName()
    console.log(sideKick);

}

//The following console.log doesnt work because of the sidekick varibale only exists within chgMjName//

//The function above only exists within ChangeSpiderManName chgMjName();//