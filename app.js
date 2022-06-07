h1 = document.querySelector("h1");
btnSingle = document.querySelectorAll(".singleFunc");
btnEvent = document.querySelectorAll(".eventHandler");

function changeColor(color) {
  h1.style.backgroundColor = color;
}

for (let btn of btnSingle) {
  btn.onclick = (e) => {
    const color = e.srcElement.childNodes[0].data;
    h1.style.backgroundColor = color;
  };
}

for (let btn of btnEvent) {
  btn.addEventListener("click", (e) => {
    const color = e.srcElement.childNodes[0].data;
    h1.style.backgroundColor = color;
    // Lấy data khi nhấn Button
    console.dir(e.srcElement.childNodes[0].data);
  });
}
