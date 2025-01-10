// function hello() {
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// demo();


// Visualizing the call stack

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();

// In stack frame

// three() -> two() -> one() -> return 1
// three() -> two() -> 1 + one() -> return 1
// three() -> two() -> 1 + 1 = 2 return 2
// three() -> 2 + one() -> return 1
// three() -> 2 + 1 = 3
// stack empty

// we can see the call stack in the sources tab (in inspect)