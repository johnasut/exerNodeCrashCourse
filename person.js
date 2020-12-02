// ** Example 1

// const person = {
//     name: 'Peter Parker',
//     age: 17
// }

// module.exports = person;


// ** Example 2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Person;


// ** Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
    
// })

// console.log(__dirname, __filename);