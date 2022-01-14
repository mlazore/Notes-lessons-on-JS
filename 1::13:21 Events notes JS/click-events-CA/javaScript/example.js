// This is a click event place on the class '.theOne' which is tied to a button on the page.
document.querySelector(".click-example").addEventListener("click" , function (){
    alert(`You Clicked Me!!!`)
})



// this is a function triggered by the onclick attribute tied to a button on our page.
function submit (event) {
    event.preventDefault(); //
    console.log("Submitted!")
}



// this is an onchange event, this listens to see if the form with the class '.text-1' has changed
document.querySelector(".text-1").addEventListener("change" , function (){
    let userInput = document.querySelector(".text-1").value;
    console.log(userInput)
})

function hello () {
    console.log("Hello!")
};



// this is a scroll event that console logs when you scroll in the div with the class '.scrolly'
document.querySelector(`.scrolly`).addEventListener("scroll" , function (){
    console.log("you just scrolled!");
})



// these are both mouse over events, they are triggered by the elements on the page with mouseover attributes.
function superSize (txt){
    txt.style[`font-size`] = `30px`;
    txt.style[`color`] = `blue`;
}

function reset (txt) {
    txt.style[`font-size`] = `24px`;
    txt.style[`color`] = `teal`;
}

// this is a mouse out event, it listens for the mouse to go away from the element with the class '.green-text' and then changes the color to black.




// this is also a mouse over event, it listens for the mouse to go over the element with the class '.green-text' and then calls the function greenMachine.



