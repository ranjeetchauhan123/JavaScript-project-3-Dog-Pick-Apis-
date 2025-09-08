let url = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector("button");
let image = document.querySelector("img");
async function getDogImage() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        image.src = data.message;
    } catch (e) {
        console.log(e);
    }
};