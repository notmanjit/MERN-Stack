// factory function

// function personMaker(name, age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hello, My name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = personMaker("mohan", 25);
// let p2 = personMaker("rohan", 23);

// ------------------------------------------

// constructors

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // console.log(this);
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("rohan", 23);
// let p2 = new Person("sohan", 22);

// -------------------------------------------

// class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("rohan", 23);
// let p2 = new Person("sonam", 25);

// -------------------------------------------

// inheritance

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let s1 = new Student("rohan", 19, 90);
let t1 = new Teacher("Mohit", 45, "English");