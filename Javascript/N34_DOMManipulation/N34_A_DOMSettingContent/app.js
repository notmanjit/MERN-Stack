let para = document.querySelector("p");
// console.log(para);
// console.dir(para);


// para.innerText
// shows the visible text contained in a node(which displayed in the screen, hidden are not showed)

// para.innerHTML
// shows the full inner markup

// para.textContent
// shows all the full text(even the hidden one) if any element have property set to hidden(display: none, visibilty: hidden)
// and it show the text format similar to our html file(follow newline if present in html file)


// change text
// para.innerText = "I am Ironman";

// if we want to change text and pass html markup too
// para.innerHTML = "I am <b>Ironman</b>";
// para.innerHTML = "I am <b><u>Ironman</u></b>";


let heading = document.querySelector("h1");
heading.innerHTML = "<u>Spider Man</u>";

// alternate way : no need to type the text
// heading.innerHTML = `<u>${heading.innerText}</u>`;
