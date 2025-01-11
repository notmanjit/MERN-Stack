// npm (node package manager)
// npm is the standard package manager for Node.js


// figlet package

const figlet = require("figlet");

figlet("MONU", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });