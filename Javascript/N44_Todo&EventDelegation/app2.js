let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = inp.value;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");

    li.appendChild(del);
    ul.append(li);

    inp.value = "";
})

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
})