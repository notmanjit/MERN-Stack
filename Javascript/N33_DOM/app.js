// DOM (Document Object Model)
// The DOM represents a document with a logical tree and every node is itself read as a object
// body, div, ul, li, h1 etc all are objects for javascript

// ---------------------------------------


// Selecting elements
// ---------------------------------------

// getElementById
// returns an element as an object or null (if not found)

// document.getElementById("mainImg")

// let imgObj = document.getElementById("mainImg")
// console.dir(imgObj)     // object form

// console.log(imgObj.src);
// console.log(imgObj.tagName);
// console.log(imgObj.id);

// change source(url)
// imgObj.src = "assets/creation_1.png"

// console.dir(document.getElementById("description"));

// if element with that id is not found prints "null"

// ---------------------------------------

// getElementsByClassName
// returns the elements as an HTML Collection or empty collection (if not found)

// console.log(document.getElementsByClassName("oldImg"));
// console.log(document.getElementsByClassName("oldImg")[0]);


// let images = document.getElementsByClassName("oldImg");

// for (let i = 0; i < images.length; i++) {
//     console.dir(images[i]);
//     console.dir(images[i].src);
// }


// let images = document.getElementsByClassName("oldImg");

// for (let i = 0; i < images.length; i++) {
//     images[i].src = "assets/spiderman_img.png";
//     console.log(`image no. ${i} changed`);
// }

// ---------------------------------------

// getElementsByTagName
// returns the elements as an HTML Collection or empty collection (if not found)

// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1]);

// document.getElementsByTagName("p")[1].innerText = "I am IronMan";


// console.log(document.getElementsByTagName("span"));     // op: HTMLCollection []
// returns empty collection because span tag is not used yet in the document

// ---------------------------------------

// query selector
// allows us to select any CSS selectors

// selects only first element with tag/id/class
// console.dir(document.querySelector("p"));       // for tag
// console.dir(document.querySelector("#description"));        // for id
// console.dir(document.querySelector(".oldImg"));         // for class


// nesting is also possible
// console.dir(document.querySelector(".box a"));


// selects all elements
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll(".box a"));