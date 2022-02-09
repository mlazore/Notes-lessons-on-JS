let numOfCookies = 0;
let click = 1;

let cookie = document.querySelector("#myCookie");

let info = document.querySelector("#myText");




let grandmaAchievement = true;
let grandma = 5;

function addCookie(defCookieNum) {
    let numberAdded = defCookieNum
    if (grandmaAchievement) {
        numberAdded = defCookieNum + grandma;
    }
    numOfCookies = defCookieNum + click;
    info.innerHTML = (`You have ${numOfCookies} cookie(s). You are making ${numberAdded} cookies a second`);
}

setInterval(addCookie, 100);
