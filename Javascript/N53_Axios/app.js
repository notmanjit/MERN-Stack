// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch (e) {
//         console.log("Error -", e);
//     }

//     console.log("Bye")
// }

// getFacts();




// axios (is a library)
// to use download axios or insert link
// link : <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

// if we have fetch then why using axios - because when we receive response using fetch it comes in a readable stream but not exact json data
// so to make it json data we have to parse it but in axios we get the direct response

// refactoring our above code using axios (more compact)

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log("Error :", e);
//     }
// }

// -------------------------------------------------

// creating random cat fact generator with html

// let btn = document.querySelector("button");

// btn.addEventListener("click", async function () {
//     let fact = await getFacts();
//     let p = document.querySelector("p");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error :", e);
//         return "No fact found";
//     }
// }

// -----------------------------------------------------


// Get random dog image

// let btn = document.querySelector("button");

// btn.addEventListener("click", async function () {
//     let data = await getImg();
//     let img = document.querySelector("img");
//     img.setAttribute("src", data);
// })

// let url = "https://dog.ceo/api/breeds/image/random";

// async function getImg() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res);
//         return res.data.message;
//     } catch (e) {
//         console.log("Error :", e);
//         return "No image found";
//     }
// }

// ---------------------------------------------------

// passing header within our axios request

// to pass header we create a headers object of key-value pair and in value we make one more object and pass our key-value pair

// let url = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//         const header = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, header);
//         console.log(res.data.joke);
//     } catch (e) {
//         console.log("Error :", e);
//     }
// }

// ------------------------------------------------------

// activity - displaying colleges of country


// let url = "http://universities.hipolabs.com/search?name=";

// async function getCountry(country) {
//     try {
//         let res = await axios.get(url + country);
//         // console.log(res.data);
//         return res.data;

//     } catch (e) {
//         console.log("Error :", e);
//         return [];
//     }
// }

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// btn.addEventListener("click", async () => {
//     let country = inp.value;
//     console.log(country);
//     let colleges = await getCountry(country);

//     for (col of colleges) {
//         console.log(col.name);
//     }

//     showColleges(colleges);
// })

// function showColleges(colleges) {
//     document.querySelector("ul").innerText = "";
//     for (col of colleges) {
//         let li = document.createElement("li");
//         li.innerText = col.name;

//         document.querySelector("ul").appendChild(li);
//     }
// }

// ----------------------------------------------------------------

// colleges in state of India

let url = "http://universities.hipolabs.com/search?name=India";

async function getState(state) {
    try {
        let colleges = [];
        let res = await axios.get(url);
        for (let i = 0; i < res.data.length; i++) {
            let data = res.data[i]["state-province"];
            let col = res.data[i].name;
            if (state == data) {
                colleges.push(col);
            } else {
                return ["No result found!"];
            }
            console.log(data);
        }
        return colleges;
    } catch (e) {
        console.log("Error :", e);
        return [];
    }
}

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", async () => {
    ul.innerText = "";
    let inpState = inp.value;
    let college = await getState(inpState);

    for (let i = 0; i < college.length; i++) {
        let li = document.createElement("li");
        li.innerText = college[i];
        ul.appendChild(li);
    }
})