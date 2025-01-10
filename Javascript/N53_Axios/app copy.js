// Marvel API

let url = "https://www.whenisthenextmcufilm.com/api";

let img = document.querySelector("img");
let h3 = document.querySelector("h3");
let p1 = document.querySelector("#release");
let p2 = document.querySelector("#overview");

async function marvel() {
    try {
        let res = await axios.get(url);
        console.log(res.data);

        let poster = res.data.poster_url;
        let title = res.data.title;
        let release = res.data.release_date;
        let overview = res.data.overview;

        img.setAttribute("src", poster);
        h3.innerText = title;
        p1.innerText = `Releasing on ${release}`;
        p2.innerText = overview;

    } catch (e) {
        console.log("Error :", e);
    }
}