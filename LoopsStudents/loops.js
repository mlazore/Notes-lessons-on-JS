// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Loops through the array to print each zoo animal.

 for (let i = 0; i < zooAnimals.length; i++){
   console.log(zooAnimals(i));

// //Print the array in backwards order

for (let i = zooAnimals.length -1; i >= -1; i--){
  console.log((zooAnimals[i]);
}

for (let x in zooAnimals){
  console.log(`example of for in loop, this is  the index x: ${x}`);
  console.log(`example of for in loop, this is the value: ${zooAnimals[x]}`);
}


//example of forEach
zooAnimals.zooAnimals.forEach()

function forEachExample(value, index, array){

console.log(value);
console.log(index);
console.log(array);

}


//--------------------------------------------

// Loops from 0 to 4.


  //----------------------------------------

  // This is our starting myFarm array.
  var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

  // Creating a variable to hold our array length.


  // Looping through our myFarm array.
  

    // Console out the farm animal in the current index.
  

    // If the first character in the current animal is "c" or "o", alert the following message.
    

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

  for (let i = 0; i < array.length, i++){
    console.log(`${array[i].name} meets the age limit: ${(array[i].age >= 17) ? }`);`
  }

}
loopThroughArray(moviePatrons);


if(age >= 17){
  console.log( ${name}`you are old enough to watch the movie`)
} else if{
  console.log(${name "you are to young")
};



Review: Ask for questions or if anyone wants to see one of these problems again.



let person {
  firstName: `Martin`,
  lastName: `Lazore`,
  fullName: `Martin Lazore`

    function(fullName){
      console.log(`firstName + lastName`)
      console.log(`this.fullName`)
  }
}

let person {
  firstName: `Martin`,
  lastName: `Lazore`,
  fullName:function() {

    console.log(`this.firstName` + `this.lastName`)
  }
}
person.fullname() //calling the function





function exercise(run) {
  let testString = "Today's exercise:" + run
  return testString
  
}
let run = exercise('running');
console.log(run)

console.log(run())

var exercise = function(run) {
  var testString = "Today's exercise:" + run
  return function () {
    return testString;

}

};

var run = exercise(`running`);
run()
console.log(run())



var exercise1 = function(run) {
  var testString = "Today's exercise:" + run
  return testString
};
var exercise2 = function(run) {
  var testString = "Today's exercise2:" + run
  return function () {
    return testString;
    }
};

console.log(typeof exercise1)
console.log(typeof exercise1(`test`))
console.log(typeof exercise2)

console.log(typeof exercise2(`test`))
let test1 = exercise2(`test`)
console.log(typeof test1())
console.log(test1())

var exercise = function(run) {
  var testString = "Today's exercise:" + run
  return function () {
    return testString;
    }
};
console.log(typeof exercise)
var run = exercise(`running`);
console.log(run())












function exercise (todaysActivity){
  return `Todays exercise:` + todaysActivity;
}
console.log(`run`)
console.log(`swim`)

let run = exercise(`running`)
let run = exercise(`swimming`)
