// adding elements

// we can add element to our document like we manipulate(add, remove,...) attributes to our existing document

// createElement
let newPara = document.createElement('p');
// console.dir(newPara);

newPara.innerText = "I am a new paragraph";



// appendChild
// now the newPara is created in the js ans document object but we are unable to find it in our document
// we have to insert it


// let body = document.querySelector("body");

// now the newPara will inserted in the body in the last
// body.appendChild(newPara);

// now the newPara will inserted in the box
let box = document.querySelector(".box");
// box.appendChild(newPara);


// let btn = document.createElement("button")
// console.dir(btn);
// btn.innerText = "Click me"
// box.appendChild(btn)



// append
// used to append text and also element

// newPara.append(" another line");        // adding text
// newPara.append(btn);                //adding element
// newPara.append("one more");



// prepend
// add element at first

// box.prepend(newPara);



// insertAdjacentElement(position, element)

let btn = document.createElement("button")
btn.innerHTML = "TEST BUTTON";
let p = document.querySelector("p");

// beforebegin : Before the targetElement itself.
p.insertAdjacentElement("beforebegin", btn);

// afterbegin : Just inside the targetElement, before its first child.
p.insertAdjacentElement('afterbegin', btn);

// beforeend : Just inside the targetElement, after its last child.
p.insertAdjacentElement('beforeend', btn);

// afterend : After the targetElement itself.
p.insertAdjacentElement('afterend', btn);



// removing elements

let body = document.querySelector("body");

// removeChild
// body.removeChild(btn);


// remove
btn.remove();
p.remove();