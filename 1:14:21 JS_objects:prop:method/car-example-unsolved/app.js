let car = {
    make: `Toyota`, //value is Toyota
    model: `Supra`,
    color: `Red`,
    mileage: 237,
    previousOwners: ["Mark", "Tim", "Harold"],
    modifications: {
        mod1: "wheels",
        mod2: "Lowering",
        mod3: "speakers",
    },
    driveToWork: () =>
    alert(`Old mileage is ${car.mileage}`),
    car.mileage = car.mileage + 30,
    console.log = (`You drove to work, your new mileage is ${car.mileage}`)
}

console.log(car.modifications.mod1);
console.log(car.previousOwners[1]);

console.log(Object.keys(car));


////////////////////////////////////////////////////////
let person1 = {
    firstName: "Dylan",
    lastName: "Trimble",
    age: 17,
    eyecolor: "Brown",
};


// //another way of doing what we just did above
let person2 = object ();

person2.firstname = `Justin`;
person2.lastname = `McNeil`;
person2.age = 21;
person2.eyecolor = `Brown`;

console.log(person2.firstname)

//below is another way to do it dont recommend
person1.job = `Instructor`;
console.log(person1.job);

//////////////////////////////////////
let r2HGrad = {
    name1 = `Martin`,
    school = `Philip O Berry`,
    skills = [`Learning new languages`, `PD skills`, `real world tech skills`]
}

console.log(r2HGrad);


console.log(Object.keys(car));