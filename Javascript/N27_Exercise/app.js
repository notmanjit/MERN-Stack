// let arrayAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; 
//     }
//     return sum / arr.length;
// }

// let arr = [10,20,30,40,50];
// console.log(arrayAverage(arr));

// --------------------------------------------------------

// let isEven = n => {
//     if (n % 2 == 0) {
//         return "Even";
//     }
//     else {
//         return "Not even";
//     }
// };
// console.log(isEven(3));


// let n = 41;
// let isEven = n => n % 2 == 0;

// console.log(isEven(n));

// --------------------------------------------------------

// const object = {
//     message: "Hello World!",
    
//     logMessage() {
//         console.log(this.message);
//     },
// };
// setTimeout(object.logMessage, 1000);

// --------------------------------------------------------

// const object = {
//     message: "Hello World!",

//     logMessage: () => {
//         console.log(this.message);
//     },
// };
// setTimeout(object.logMessage, 1000);



// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };

// object.method(callback);

// --------------------------------------------------------

let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);

