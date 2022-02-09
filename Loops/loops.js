// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl", "Monkey"];
/*
// Loops through the array to print each zoo animal.

//prints every element of the array forward
for (let i = 0; i < zooAnimals.length -3; i++){
  console.log(zooAnimals[i]);
}

//Challenge print everything in the array in backwards order
for (let i = zooAnimals.length-1; i > -1; i--){
  console.log(zooAnimals[i]);
}

for (let x in zooAnimals){
  console.log(`example of for in loop, this is the index x: ${x}`);
  console.log(`example of for in loop, this is the value: ${zooAnimals[x]}`);
}
*/

//example of forEach
zooAnimals.forEach(forEachExample);

//the order is what matters, the value will always be first, then the index, then the array)
function forEachExample(value, index) {
  //console.log(value);
  //console.log(index);
  //console.log(array);
  if (value == "Monkey") {
    console.log("you have monkeys!!!");
  } 

}

/*
//example of infinite loop (DONT DO!!!)
for (let i = 10; i > zooAnimals.length; i++){
  console.log("hello");
}
*/
//--------------------------------------------

// Loops from 0 to 4.


  //----------------------------------------

  // This is our starting myFarm array.
  var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

  // Creating a variable to hold our array length.
  let myFarmLength = myFarm.length;

  // Looping through our myFarm array.  //yall do this
  

    // Console out the farm animal in the current index.  //yall do this
  

    // If the first character in the current animal is "c" or "o", alert the following message.  //use charAt()
    

  // Arrays can store functions and then we can loop through those functions.

  function sayHello() {
    console.log("Hello");
  };

  function askAnything () {
    console.log("How is your day going?")
  };

  function sayGoodBye () {
    console.log("Goodbye!")
  }; 

  


  //Looping though objects

  var moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
];

function loopThroughArray (array){

  //ternary if statement 
  //before the question mark is the condition
  //in front of the colon is what will happen if it is true,
   //after the colon is what happens when it is false
  for (let i = 0; i < array.length; i++){
    console.log(`${(array[i].age >= 17) ? `${array[i].name} is old enough at ${array[i].age} years old` :
     `${array[i].name} is NOT old enough at ${array[i].age} years old`}`);
  }

}
loopThroughArray(moviePatrons);




//Review: Ask for questions or if anyone wants to see one of these problems again.