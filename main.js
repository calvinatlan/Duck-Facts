function main() {
    const enter = document.getElementById("enter");
    enter.addEventListener("click", start);
}

async function start() {
    if (playing) {
        return;
    }
    playing = true;
    const audio = document.getElementById("music");
    const container = document.getElementById("enter-container");
    const enter = document.getElementById("enter");
    const duckFacts = document.querySelector("h1.facts");
    const factOne = document.querySelector("h2.facts");
    const duckBirds = document.querySelector("h3.facts");
    audio.volume = 0.2;
    audio.play();
    container.style.opacity = "0";
    setTimeout(() => {enter.remove();}, 1000);
    await timeout(3000);
    duckFacts.style.opacity = "1";
    await timeout(5000);
    factOne.style.opacity = "1";
    await timeout(6500);
    duckBirds.style.opacity = "1";
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let playing = false;
main();