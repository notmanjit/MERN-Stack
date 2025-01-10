// let url = "https://catfact.ninja/fact";

// fetch is a function

// fetch(url)                      // returns a promise, it means we can use then and catch methods
//     .then((response) => {
//         console.log(response);
//         response.json()         // parse data, using this function brings our data in readable form and also returns a promise
//             .then((data) => {
//                 console.log(data.fact);
//             })
//     })
//     .catch((err) => {
//         console.log("Error -", err);
//     });




// OR
// refactoring the same code using method chaining

// fetch(url)
//     .then((res) => {
//         // console.log(res);
//         return res.json()
//     })
//     .then((data1) => {
//         console.log("Data 1 :",data1.fact);
//         return fetch(url);          // sending one more request
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("Data 2 :",data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error -", err);
//     })

// // this code will not wait for the above api calls(it will keep running in the backend) works asynchronously
// console.log("code executed");




// OR
// again refactoring with async and await

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        // console.log(res);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch (e) {
        console.log("Error -", e);
    }

    // still executes whether an error found or not
    console.log("Bye")
}

getFacts();