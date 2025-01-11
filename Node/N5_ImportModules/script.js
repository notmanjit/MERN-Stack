// import

// import and require does the same thing but the difference is
// we can selectively load only the pieces we need with "import" but with "require" we can't selectively load it imports the entire file
// using "import" can save memory 

// while using import, write "type": "module" in package.json

import {sum, PI} from "./math.js";
// import {generate} from "random-words";

console.log(sum(10, 20));
console.log(PI);

// console.log(generate());