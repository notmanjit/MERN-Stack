// let cars = ["audi", "bmw", "maruti"];

// push: add to end

// cars.push("toyota");
// cars.push("suzuki");
// console.log(cars);

// ------------------------------------------------------

// pop: deletes from the end and returns the deleted value

// suzuki will be deleted
// cars.pop();
// console.log(cars);

// ------------------------------------------------------

// unshift: add to start

// cars.unshift("ferrari");
// cars.unshift("suzuki");
// console.log(cars);

// ------------------------------------------------------

// shift: delete from the start and return the deleted value

// cars.shift();
// console.log(cars);

// ------------------------------------------------------

// // real life example
// let followers = ["a", "b", "c"];
// let blocked = followers.shift();
// // deleted the first element from the follower and moved to the blocked

// console.log(followers);
// console.log(blocked);

// ------------------------------------------------------

// practice
// let month = ["january", "july", "march", "august"];

// console.log(month);
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// ------------------------------------------------------

// indexOf

// let cars = ["audi", "bmw", "maruti"];

// // if found = return index
// // not found = -1
// console.log(cars.indexOf("maruti"));
// console.log(cars.indexOf("ferrari"));

// // includes

// // if found = true
// // not found = false
// console.log(cars.includes("bmw"));
// console.log(cars.includes("ferrari"));

// ------------------------------------------------------

// concat

// let primary = ["red", "blue", "green"];
// let secondary = ["orange", "yellow", "pink"];

// console.log(primary.concat(secondary));
// console.log(secondary.concat(primary));

// no changes will occur in the original array
// console.log(primary);
// console.log(secondary);

// let allColors = primary.concat(secondary);
// console.log(allColors);

// ------------------------------------------------------

// reverse

// original array will be changed
// primary.reverse();
// console.log(primary);

// ------------------------------------------------------

// slice(start, end)

let colors = ["red", "green", "blue", "yellow", "orange", "pink"];

// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(-2));
console.log(colors.slice(2,4));

// this will print an empty array because after slicing all the elements the array remains nothing
// console.log(colors.slice(10));

// ------------------------------------------------------

// splice (start, deleteCount, item0,...itemN)

// with splice method we can remove / replace / add elements in place
// it make changes in the original array

// delete all the elements from the index 4
// colors.splice(4);    // op: "red", "green", "blue", "yellow"

// starts from 0 and deletes 1 element
// colors.splice(0, 1);    // op: "green", "blue", "yellow", "orange", "pink"

// starts from 1 and deletes 2 element
// colors.splice(1,2);     // "red", "yellow", "orange", "pink"

// starts from 1 and deletes 0 and add white in the 1 index(all the elements will shift) in between red and green
// in short insert element in any place
// colors.splice(1, 0, "white");        // 'red', 'white', 'green', 'blue', 'yellow', 'orange', 'pink'

// starts from 1 and deletes 1(white is deleted) and add black(in place of white)
// in short replace element
// colors.splice(1, 1, "black");        // 'red', 'black', 'blue', 'yellow', 'orange', 'pink'

// console.log(colors);

// ------------------------------------------------------

// sort

// sort method only work on string(ascending order) not on number

// console.log(colors.sort());

// let char = ['d', 'c', 'a', 'e', 'f', 'b'];
// console.log(char.sort());

// let num = [100, 42, 67, 89, 90];
// console.log(num.sort());
// op: [100, 42, 67, 89, 90]
// because internally it convert the array into string and then it sort 

// ------------------------------------------------------

// practice

// let month = ["january", "july", "march", "august"];

// console.log(month);
// month.splice(0, 2, "july", "june");
// console.log(month);


let lang = ['c', "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(lang)
// console.log(lang.reverse().indexOf("javascript"));
// console.log(lang)
