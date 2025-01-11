// process : it is an object
// this object provides information about, and control over, the current Node.js process


// console.log(process.argv);
// return an array containing the command-line arguments passed when the Node.js process was launched

let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("hello", args[i]);
}

// run using this or any other parameters
// node script.js abc xyz pqr