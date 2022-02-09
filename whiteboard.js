//Write a function that will check if the string is a palindrome or not.
//Palindrome is a word, sentence or character sequence which reads the same as we reverse it.
//Like- “mam”, “racecar” etc

// double quotes "" split it by each word
function palindrome(str){

    const revWord = str.split("").reverse().join("")
    if(revWord === str){
        console.log("This is a palindrome")
    }else{
        console.log("This is not a palindrome")
    }
}
palindrome("racecar");

// I would have a method that reverses the original word then pass it down to my if statement

