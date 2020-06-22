/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
//Using Object Literal
let person = {name: "Lenny", age: 19};
console.log(person);
//Using Constructor
let snake = Object();
snake.name = "blip"
snake.age = 2
console.log(snake);
//Using ES6 Classes
class Panda {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
let panda2 = new Panda ('Kaito', 7)
console.log(panda2);