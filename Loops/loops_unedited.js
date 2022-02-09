// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Loops through the array to print each zoo animal.
for (var i = 0; i < zooAnimals.length; i++) {
  // Logs the animal at index position i to the console. This code is executed each we go through the loop.
  console.log(zooAnimals[i]);
}

//--------------------------------------------

// Loops from 0 to 4.
for (var i = 0; i < 5; i++) {
    // Prints a message and the current i value to the console.
    console.log("I am " + i);
  }

  // Equivalent
  // console.log("I am 0");
  // console.log("I am 1");
  // console.log("I am 2");
  // console.log("I am 3");
  // console.log("I am 4");

  //----------------------------------------

  // This is our starting myFarm array.
  var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

  // Creating a variable to hold our array length.
  var arrayLength = myFarm.length;

  // Looping through our myFarm array.
  for (var j = 0; j < arrayLength; j++) {

    // Console out the farm animal in the current index.
    console.log(myFarm[j]);

    // If the first character in the current animal is "c" or "o", alert the following message.
    if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
      alert("Starts with a c or an o!");
    }

  }

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

  var greetings = [sayHello, askAnything, sayGoodBye];

  for (var i = 0; i < greetings.length; i++){
    greetings[i]();
  }


  //Looping though objects

  var moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
];

function canWatchRMovies (array) {
  for (var i = 0; i < array.length; i++){
    if (array[i].age >= 17 ){
      console.log(`${array[i].name} can watch R rated movies`)
    }else{
      console.log(`${array[i].name} can NOT watch R rated movies`)
    }
  }
}

canWatchRMovies(moviePatrons);


//Review: Ask for questions or if anyone wants to see one of these problems again.