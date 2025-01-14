// faker package : generates fake data
const { faker } = require('@faker-js/faker');

// mysql package
const mysql = require('mysql2');



// // all syntax used from the faker package (never memorize)
// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }
// // console.log(getRandomUser());




// // all syntax of mysql2 package
// // creating connection with mysql
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "myapp",    // database name you created in the mysql
//     password: "manjit@123"    // your mysql password
// });

// let q = "SHOW TABLES";

// // its connected now how to use the connection 
// try {
//     // connection.query(query, callbackFunction)
//     // the callbackFunction takes 3 parameter (err, results, fields)
//     // field is used when we write any 'select' query

//     // connection.query("SHOW TABLES", (err, result) => {
//       connection.query(q, (err, result) => {
//         if (err) throw err;
//         console.log(result);

//         // result will come in an array so
//         // console.log(result.length);
//         // console.log(result[0]);
//         // console.log(result[1]);
//     });
// } catch (err) {
//     console.log(err);
// }


// placeholder = ?

// for one data entry
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "abc", "hello@gmail.com", "123"];

// for multiple data entry
// now you can write single ? mark
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [["123b", "abcb", "hello@gmail.comb", "123b"], ["123c", "abcc", "hello@gmail.comc", "123c"]];

// try {
//       // connection.query(q, user, (err, result) => {     // for one data entry
//       connection.query(q, [users], (err, result) => {     // for multiple data entry
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();

// -------------------------------------------------------

// inserting data in bulk

// some same previous codes

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "myapp",
  password: "manjit@123"
});

const getRandomUser = () => {
  return [                      // now storing it in an array for direct access
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];

for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());     // 100 fake user data
}

try {
  connection.query(q, [data], (err, results) => {
    if (err) throw err;
    console.log(results);
  })
} catch (err) {
  console.log(err);
}

connection.end();