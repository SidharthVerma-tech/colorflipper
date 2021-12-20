const colors = ["green", "red", "purple", "f15025", "grey", "yellow", "#rgba(133,122,200)" ]
const button = document.getElementById("btn");
const color = document.querySelector(".color");
button.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[getRandomNumber()]
    color.textContent = colors[getRandomNumber()]
    console.log("button clicked!")
})
function getRandomNumber () {
    return Math.floor(Math.random()*6);
}