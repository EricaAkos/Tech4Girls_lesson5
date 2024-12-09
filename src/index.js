let heading = document.getElementById("heading");
heading.innerHTML = ("<p>I am going to miss you all 🤗</p>");
let img = document.getElementById("img");
img.src = "../lesson5/images/nail design.jpg";
let button = document.querySelector("button")
function changeButtonStyle(){
    button.style.backgroundColor = "blue";
    button.style.color = "white";
}
button.addEventListener("click", changeButtonStyle);
