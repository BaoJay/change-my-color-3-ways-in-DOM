h1 = document.querySelector("h1");
btnRed = document.querySelector("#red");
btnEvent = document.querySelectorAll(".eventHandler");
console.log(btnEvent);

function changeColor(color) {
  h1.style.backgroundColor = color;
}

btnRed.onclick = (red) => {
  h1.style.backgroundColor = "red";
};

for (let btn of btnEvent) {
  btn.addEventListener("click", (e) => {
    const color = e.srcElement.childNodes[0].data;
    h1.style.backgroundColor = color;
    console.dir(e.srcElement.childNodes[0].data);
  });
}
