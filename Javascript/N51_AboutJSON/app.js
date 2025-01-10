// JSON stands for JavaScript Object Notation

let jsonData = '{"fact":"In Siam, the cat was so revered that one rode in a chariot at the head of a parade celebrating the new king.","length":108}';

// JSON data to JS object
// method to parse a string data into a JS object

let validData = JSON.parse(jsonData);
// console.log(validData);
// console.log(validData.fact);
// console.log(validData.length);

// -----------------------------------------------

let student = {
    name : "Manjit",
    age : 44,
}

// JS object to JSON
// method to parse a JS object data into JSON

let data = JSON.stringify(student);
console.log(data);