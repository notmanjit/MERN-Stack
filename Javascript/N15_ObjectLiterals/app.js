// const student = {
//     name: "Manjit",
//     age: 21,
//     desc: "coder",
//     marks: 90
// };

const item = {
    name: "bag",
    price: 1000,
    discount: 100,
    color: ["red", "black"]
};

// defining the objects const means we cannot change the memory address but we can manipulate the data same as array


const post = {
    username: "manjit",
    content: "image",
    likes: 240,
    reposts: 5,
    tags: ["rohan", "sohan", "mohan"]
};

// ----------------------------------------------------------

// how to get values in object literals

// both are valid
// console.log(post["content"]);
// console.log(post.content);

let prop = "content";
// console.log(post[prop]);     // valid
// console.log(post.prop);      // this is not valid


// access the array in the object literals
// console.log(post.tags[0]);
// console.log(post["tags"][0]);

// ----------------------------------------------------------

// js automatically converts objects keys to strings
// even if we made the number as a key, the number will be converted to string.

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[true]);
// console.log(obj[null]);
// console.log(obj[undefined]);

// here we used number and reserved keywords to write the keys but we are not facing any error because it converts the keys to strings

// ----------------------------------------------------------

// add / updates / delete values

const student = {
    name: "Manjit",
    age: 21,
    desc: "coder",
    marks: 90
};
// console.log(student);


// update

// student.desc = "developer";
// student["desc"] = "developer";
// student.marks = "A";

// console.log(student);

// add

// student.gender = "male";
student.subject = ["C", "C++", "Java"];
// student.subject[3] = "Python";
// console.log(student);

// delete

// delete student.marks;        // op: true
// delete student.desc;        // op: true
// delete student.subject[1];
// console.log(student);

// ----------------------------------------------------------

// nested objects

const studentInfo = {
    rohan: {
        grade: "A",
        city: "nagaon"
    },
    mohan: {
        grade: "A+",
        city: "tezpur"
    },
    sohan: {
        grade: "O",
        city: "guwahati"
    }
};

// console.log(studentInfo);
// console.log(studentInfo.mohan);
// console.log(studentInfo.mohan.city);

// studentInfo.mohan.city = "moriagaon";
// console.log(studentInfo);

// ----------------------------------------------------------

// array of objects

const classInfo = [
    {
        name: "rohan",
        grade: "A",
        city: "nagaon"
    },
    {
        name: "mohan",
        grade: "A+",
        city: "tezpur"
    },
    {
        name: "sohan",
        grade: "O",
        city: "guwahati"
    }
];

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[0].name);

// // update
// classInfo[0].grade = "A+";

// // add
// classInfo[0].gender = "male";
// console.log(classInfo);