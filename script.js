for (let i = 0; i < 256; i++) {
  let main = document.createElement("div");
  main.className = "grid" + i;
  main.onmouseover = function () {
    mouseOver(i);
  };
  main.onmouseout = function () {
    mouseOut(i);
  };
  document.getElementById("main").appendChild(main);
}

let button = document.querySelector(".reset");

button.addEventListener("click", function () {
  for (i = 0; i < 256; i++) {
    document.querySelector(".grid" + i).style.backgroundColor = "#282828";
  }
});

function mouseOver(gridNumber) {
  document.querySelector(".grid" + gridNumber).style.backgroundColor = "red";
}

function mouseOut() {}
