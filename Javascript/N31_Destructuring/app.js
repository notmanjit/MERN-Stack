let names = ["Ram", "Shyam", "Rohan", "Mohit", "Dinesh", "Rahul"];
// let winner = names[0];
// let runnerup = names[1];


// using destructuring
// let [winner, runnerup] = names;
// console.log(winner);
// console.log(runnerup);


// combining destructuring and rest concept
// let [winner, runnerup, ...others] = names;
// console.log(winner);        // op : Ram
// console.log(runnerup);      // op : Shyam
// console.log(others);        // op : ['Rohan', 'Mohit', 'Dinesh', 'Rahul']

// ----------------------------------------------------

// destructuring objects

const student = {
    name: "Mohit",
    age: 22,
    class: 11,
    // city: "Guwahati",
    username: "mohit@123",
    password: 123,
};

// let username = student.username;
// let password = student.password;


// let {username, password} = student;
// console.log(username);
// console.log(password);

// creating variable name other than object's key name
// let {username: user, password: pass} = student;
// console.log(user);
// console.log(pass);


// if object don't have any particular key-value we can set a default value
// if it have the key then it will take the value from object
let {username: user, password: pass, city: place = "Nagaon"} = student;
console.log(user);
console.log(pass);
console.log(place);