// Arrow functions
// another way to define the logic of functions in a compact and short way

const sum = (a, b) => {
    console.log(a + b);
}

// in case of single arguments the parenthesis() in the aruguments are optional
const cube = n => {
    return n * n * n;
}

const pow = (a, b) => {
    return a ** b;
}

// but if there is no arguments, the parenthesis() is required
const hello = () => {
    console.log("Hello World!");
}

// ---------------------------------------------------------

// practice question

// let sqr = (n) => {
//     return n*n;
// };
// OR
// let sqr = n => (
//     n*n
// );
// OR
let sqr = n => n*n;
// console.log(sqr(4));

// ---------------------------------------------------------

// Implicit return in arrow function 
// (implicit means no need to define)
// it means the function is not doing anything except the return(no print, function call or any other code)

// syntax:
// const func = (a, b) => (
//     a + b
// );

// here we use () instead of {}

let add = (a, b) => (a + b);


// since it's returning single value as we have read in single value parenthesis() is optional
const mul = (a, b) => a * b;

const sqArea = a => a * a;

// ---------------------------------------------------------

// this with arrow function

// for normal function the scope of "this" will be the calling object
// and for arrow function, it use lexical scope, "this" will be the function's parent's calling object it means the parent's "this" will be the function's "this"(inherit the "this" of its parent)

const student = {
    name: "monu",
    age: 34,
    prop: this,

    // here for this normal function the "this" will be the calling object
    //  so, this = student
    getName: function () {
        console.log(this);
        return this.name;
    },

    // here for this arrow function the "this" will be parent's "this" i.e. window
    getAge: () => {
        console.log(this);      // window object
        return this.age;        // undefined, because in window object marks variable is not defined
    },


    getInfo1: function () {
        setTimeout(() => {
            // arrow function's "this" will be parent's "this"
            console.log(this);      // student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            // normal function's "this" will be the calling object(setTimeout) and since setTimeout is a window object function
            console.log(this);      // window
        }, 2000);
    }
}
