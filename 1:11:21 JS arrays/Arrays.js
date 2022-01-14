var numbers = [19, 17, 3, 7, 21, 23, 6]

var names = ["Patrick", "Zendaya", "Daniel", "Chioma", "Iman"]

var games = new Array("MW2", "Overwatch", "2K15", "Sims3", "Crash Bandicoot")

var anime = ["Re:Zero", "Demon Slayer", "Naruto", "Death Note", "Black Clover"]



var checkNames = names.indexOf("Iman")

if(checkNames !== -1){
    console.log("They are in this class")
} else{
    console.log("They are not in this class")
}

function checkNames(name){

    var nameCheck = names.indexOf(name)

    if(nameCheck !== -1){
    console.log(`${name} is in this class`)
} else{
    console.log(`${name} is not in this class`)
}
}

checkNames("Chioma")

if (names.includes("Patrick")){
    console.log("Brian is my pod leader");
} else{
    console.log("Brian is not my pod leader");
}


for(var i=0; i<numbers.length; i++){

    sum += numbers[i]

}
console.log(sum)


