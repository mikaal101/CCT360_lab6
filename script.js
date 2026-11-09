let seeds = ["b06658", "ebaa2f", "54692d", "72aaad", "1d3257", "a3436a", "8a0000", "284035"];

function genPalette() {
    let seed = seeds[Math.floor(Math.random() * seeds.length)];
    const apiURL = "https://www.thecolorapi.com/scheme?hex=" + seed + "&count=5";

    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            let colors = data.colors;

            document.querySelector("#name").textContent = data.seed.name.value;
            let squares = document.querySelectorAll(".square");

            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = colors[i].hex.value;
            }
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

document.querySelector("#generate").addEventListener("click", genPalette);
genPalette();