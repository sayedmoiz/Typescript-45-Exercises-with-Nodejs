
//Write a program that creates Objects containing these items.

// Data type of person object.
interface person{
     Age : number,
     Name : string,
     Nationality : string,
     Student : boolean,
}

// Person object.
let person ={
    Age : 20,
    Name : 'moiz',
    Nationality : 'pakistan',
    Student : true,
}

// Print person.
console.log(person);

//Data type of car object.
interface car{
    maker : string,
    colour : string,
    automatic : boolean,
}

// Car object.
let car = {
    maker : 'toyota',
    colour : 'black',
    automatic : true,
}

// Print car.
console.log(car);