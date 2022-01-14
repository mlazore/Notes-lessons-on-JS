////////////////////////////////////////////////
//Actual Cookie Clicker Code

//variables
//this variable handles the number of clicks
let numOfCookies = 0;
let click = 1;

//accessing the cookie image in the HTML 
let cookie = document.querySelector("#myCookie");
//created variable that holds the HTML p tag myText
let info = document.querySelector("#myText");


//Achievements
let grandmaAchievement = true;
let grandma = 5;

let farmAchievement = true;
let farm = 10;

//What happens we we click the cookie.  The onclick function handles what happens when the reference element is clicked.
//this calls the addClick function
//cookie.onclick = addCookie;

//function that add 1 to the number of clicks.  
function addCookie(){

    let numberAdded = click;

    console.log(numberAdded);

    if (grandmaAchievement) {
        numberAdded =  numberAdded + grandma;
    }
    if (farmAchievement) {
        numberAdded =  numberAdded + farm;
    }

    numOfCookies = numberAdded + numOfCookies;
    info.innerHTML = (`You have ${numOfCookies} cookie(s).  You are making ${numberAdded} cookies a sec`);
}

setInterval(addCookie, 100);






