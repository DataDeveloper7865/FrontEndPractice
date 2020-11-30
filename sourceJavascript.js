
function helloFromFunc() {
    console.log("hello from my func")
}

let container = document.getElementById("container");

container.style.color = "orange";

let body = document.getElementById("container");

let firstDiv = document.getElementsByTagName("div")[0];

firstDiv.style.color = "red";
firstDiv.style.backgroundColor = "teal";

let button = document.createElement("button");
button.innerText = "I am a button created with Javascript!";
button.addEventListener("click", helloFromFunc);

container.appendChild(button);

